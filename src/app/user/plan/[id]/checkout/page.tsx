import Dashboard from '@/components/user/Dashboard/Index'
import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import { env } from 'node:process'
import { randomUUID } from 'node:crypto'
import MercadoPago, { Preference } from 'mercadopago'
import { PreferenceCreateData } from 'mercadopago/dist/clients/preference/create/types'
import { redirect } from 'next/navigation'

export default async function Page(req: NextRequest) {
  const cookie = (await cookies().get('kycauth'))?.value
  const id = req?.params?.id || ''
  const { URL, MP_ACCESS_TOKEN } = env

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const plan =
    id &&
    (await prisma.plan.findFirst({
      where: { id }
    }))

  const price = Number(plan?.price.toFixed(2))
  if (!plan?.id) {
    // error page
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
      planId: plan?.id || '',
      userId: user?.id || '',
      tid: uuid
    }
  })

  redirect(url)
}
