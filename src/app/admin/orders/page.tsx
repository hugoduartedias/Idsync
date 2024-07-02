import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import Orders from '@/components/admin/Orders/Index'

export default async function Page() {
  const cookie = (await cookies().get('kycauth'))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const orders = cookie
    ? await prisma.order.findMany({
      orderBy: { createdAt: 'desc' }
    })
    : null

  return (
    <Layout user={user}>
      <Orders user={user} orders={orders} />
    </Layout>
  )
}
