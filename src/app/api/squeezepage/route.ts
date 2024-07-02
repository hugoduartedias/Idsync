import { NextRequest, NextResponse } from 'next/server'
import prisma from '@/../db'

export async function POST(req: NextRequest) {
  const { email, number } = await req.json()

  await prisma.email.create({
    data: { email, number }
  })

  return NextResponse.json({
    status: 'success'
  })
}
export default function handle() { }
