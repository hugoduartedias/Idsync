import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import bcrypt from 'bcrypt'
import prisma from '@/../db'

export async function POST(req: NextRequest) {
  const { email, password } = await req.json()

  const user = await prisma.user.findFirst({
    where: { email }
  })

  const auth: boolean = bcrypt.compareSync(password, user?.password || '')
  const authToken: string = auth
    ? bcrypt.hashSync((Math.random() + 1).toString(36).substring(2) + (Math.random() + 1).toString(36).substring(2) + (Math.random() + 1).toString(36).substring(2), 10)
    : ''

  const cookieName: string = 'kycauth'

  if (auth) {
    cookies().set(cookieName, authToken)
    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: {
          authToken
        }
      })
    }
  } else cookies().delete(cookieName)

  return NextResponse.json({ auth, authToken, role: user?.role })
}

export default async function handler(request: NextRequest) { }
