import { cookies } from 'next/headers'
import { NextRequest, NextResponse } from 'next/server'

export function POST(req: NextRequest) {
  const { COOKIE_KEY } = process.env
  cookies().delete(COOKIE_KEY as string)
  return NextResponse.json({ status: 'success', message: 'Seção encerrada com sucesso.' })
}
