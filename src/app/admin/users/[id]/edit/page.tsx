import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import Users from '@/components/admin/Users/Index'
import { NextRequest } from 'next/server'
import Edit from '@/components/admin/Users/Edit'

export default async function Page(req: NextRequest) {
  const cookie = (await cookies().get('kycauth'))?.value
  const id = req?.params?.id || ''

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const row = cookie
    ? await prisma.user.findFirst({
      where: { id }
    })
    : null

  return (
    <Layout user={user}>
      <Edit user={user} row={row} />
    </Layout>
  )
}
