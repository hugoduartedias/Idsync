import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
import prisma from '@/../db'
import MercadoPago, { Preference } from 'mercadopago'
import { PreferenceCreateData } from 'mercadopago/dist/clients/preference/create/types'
import { randomUUID } from 'crypto'
import { env } from 'node:process'

export async function POST(req: NextRequest) {
  const { MP_ACCESS_TOKEN, URL, COOKIE_KEY } = env
  const { name, email, password, confirmPassword, plan: planSlug } = await req.json()

  if (password?.length < 8 || confirmPassword?.length < 8) {
    return NextResponse.json({
      status: 'error',
      message: 'A senha deve ter pelo menos 8 caracteres.'
    })
  }
  if (password !== confirmPassword) {
    return NextResponse.json({
      status: 'error',
      message: 'As senhas não coincidem.'
    })
  }

  let user = await prisma.user.findFirst({
    where: { email }
  })

  if (user) {
    return NextResponse.json({
      status: 'error',
      message: 'Este e-mail não está disponível.'
    })
  }

  const hash: string = bcrypt.hashSync(password, 10)
  const authToken: string = bcrypt.hashSync(
    (Math.random() + 1).toString(36).substring(2) +
    (Math.random() + 1).toString(36).substring(2) +
    (Math.random() + 1).toString(36).substring(2),
    10
  )

  user = await prisma.user.create({
    data: {
      name,
      email,
      password: hash,
      authToken
    }
  })

  await prisma.balance.create({
    data: {
      amount: 0,
      userId: <string>user?.id
    }
  })

  const cookieName: string = COOKIE_KEY as string
  cookies().set(cookieName, authToken)

  const plan = planSlug && await prisma.plan.findFirst({
    where: {
      slug: planSlug
    }
  })

  const price = Number(plan?.price.toFixed(2))
  if (!plan?.id) {
    return NextResponse.json({
      status: 'error',
      message: 'Plano não encontrado.',
      url: '/login'
    })
  }

  const uuid = randomUUID()
  const client = new MercadoPago({
    accessToken: MP_ACCESS_TOKEN as string
  })
  const preference = new Preference(client)

  const preferenceRequest: PreferenceCreateData = {
    body: {
      external_reference: uuid,
      notification_url: (URL as string) + '/webhook/mercadopago',
      back_urls: {
        success: (URL as string) + '/user/plans',
        failure: (URL as string) + '/user/plans',
        pending: (URL as string) + '/user/plans'
      },
      items: [
        {
          id: '4567',
          category_id: 'service',
          currency_id: 'BRL',
          description: 'Serviço de verificações',
          picture_url:
            'https://http2.mlstatic.com/D_NQ_NP_887467-MLA71526269815_092023-F.jpg',
          title: 'Idsync',
          quantity: 1,
          unit_price: price
        }
      ]
    }
  }

  const response = price ? await preference.create(preferenceRequest) : null
  const url = response?.init_point || '/user/plans'

  await prisma.order.create({
    data: {
      total: price,
      status: 'pending',
      planId: <string>plan?.id,
      userId: <string>user?.id,
      tid: uuid
    }
  })

  return NextResponse.json({ auth: true, authToken, role: user?.role, url })
}

export default async function handler(request: NextRequest) { }
