import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
// import prisma from '@/../db'

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.has('kycauth')

  if (!cookie) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: '/user/:route*'
}
