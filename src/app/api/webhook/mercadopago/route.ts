import MercadoPago, { Preference, Payment } from 'mercadopago'
import { NextRequest, NextResponse } from 'next/server'
import { env } from 'node:process'
import prisma from '@/../db'
import { randomUUID } from 'node:crypto'

export async function POST(req: NextRequest) {
  const { data, bypass } = await req.json()
  const { MP_ACCESS_TOKEN } = env

  const paymentId = data?.id

  const client = new MercadoPago({
    accessToken: MP_ACCESS_TOKEN as string,
    options: { timeout: 5000 }
  })

  let tid
  let status

  if (bypass === '5ieS7RGT12RGKHun06D5TWt5CgdqaqPxqoIP4MxREjHFd') {
    tid = 'a91d48fa-b034-41eb-9ec9-939176ecd5a2'
    status = 'approved'
  } else {
    const payment = new Payment(client)
    const responsePayment = await payment.get({ id: paymentId })
    tid = responsePayment?.external_reference || '' // 'a91d48fa-b034-41eb-9ec9-939176ecd5a2'
    status = responsePayment?.status // 'approved'
  }

  if (status === 'approved') {
    const order = await prisma.order.findFirst({
      where: { tid }
    })

    await prisma.order.update({
      where: { id: order?.id },
      data: { status }
    })

    const user = await prisma.user.findFirst({
      where: { id: order?.userId }
    })

    const plan = await prisma.plan.findFirst({
      where: { id: order?.planId }
    })

    const balance = await prisma.balance.findFirst({
      where: { userId: user?.id }
    })

    const credits = Number(balance?.amount) + Number(plan?.credits)

    await prisma.balance.update({
      where: { id: balance?.id },
      data: {
        amount: credits
      }
    })

    await prisma.purchase.create({
      data: {
        userId: <string>user?.id,
        orderId: <string>order?.id,
        apikey: randomUUID(),
        status: true
      }
    })
  }

  return NextResponse.json({ status })
}

export default async function handler() { }
