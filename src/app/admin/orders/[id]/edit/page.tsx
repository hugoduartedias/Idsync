import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import { NextRequest } from 'next/server'
import Edit from '@/components/admin/Orders/Edit'

export default async function Page(req: NextRequest) {
  const cookie = (await cookies().get('kycauth'))?.value
  const id = req?.params?.id || ''

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const row = cookie
    ? await prisma.order.findFirst({
      where: { id },
      include: {
        plan: true
      }
    })
    : null

  return (
    <Layout user={user}>
      <Edit user={user} row={row} />
    </Layout>
  )
}
