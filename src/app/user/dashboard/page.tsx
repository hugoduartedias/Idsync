import Dashboard from '@/components/user/Dashboard/Index'
import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookie = (await cookies().get('kycauth'))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const countUsers = await prisma.user.count()
  const countApprovedOrders = await prisma.order.count({
    where: { status: 'approved' }
  })
  const countOrders = await prisma.order.count()
  const countEmails = await prisma.email.count()
  const countApprovedAvgOrders = await prisma.order.aggregate({
    _avg: {
      total: true
    },
    where: {
      status: 'approved'
    }
  })
  const approvedOrders = await prisma.order.findMany({
    where: { status: 'approved' }
  })

  return (
    <Layout user={user}>
      <Dashboard
        user={user}
        countUsers={countUsers}
        countApprovedOrders={countApprovedOrders}
        countOrders={countOrders}
        countEmails={countEmails}
        countApprovedAvgOrders={countApprovedAvgOrders}
        approvedOrders={approvedOrders}
      />
    </Layout>
  )
}
