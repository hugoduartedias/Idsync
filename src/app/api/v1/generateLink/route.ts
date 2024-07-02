import { NextRequest, NextResponse } from 'next/server'
import { v4 as uuidv4, v6 as uuidv6 } from 'uuid'
import prisma from '@/../db'
import { cookies } from 'next/headers'

export async function POST(req: NextRequest) {
  const { URL } = process.env
  const uuid = uuidv4()
  const { callbackUrl } = await req.json()
  const apikey = req.headers.get('apikey')

  const purchase = await prisma.purchase.findFirst({
    orderBy: { createdAt: 'desc' },
    where: { apikey: <string>apikey, status: true },
    include: {
      order: true,
      user: true
    }
  })

  if (purchase?.apikey !== apikey) {
    return NextResponse.json({
      status: 'error',
      message: 'Invalid apikey.'
    })
  }

  await prisma.verification.create({
    data: {
      userId: <string>purchase.user.id,
      callbackUrl: <string>callbackUrl,
      uuid
    }
  })

  return NextResponse.json({
    status: 'success',
    link: `${URL}/check?uuid=${uuid}`
  })
}

export default async function handler(request: NextRequest) { }
