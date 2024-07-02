import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import { env } from 'node:process'
import Plans from '@/components/user/Plans/Index'

export default async function Page() {
  const { COOKIE_KEY } = env
  const cookie = (await cookies().get(COOKIE_KEY as string))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const balance = cookie
    ? await prisma.balance.findFirst({
      where: { userId: user?.id }
    })
    : null

  const plans = cookie ? await prisma.plan.findMany({}) : null

  const order = cookie
    ? await prisma.order.findFirst({
      orderBy: { createdAt: 'desc' },
      where: { status: 'approved' },
      include: {
        plan: {
          include: {
            PlanMeta: true
          }
        }
      }
    })
    : null

  return (
    <Layout user={user}>
      <Plans user={user} balance={balance} plans={plans} order={order} />
    </Layout>
  )
}
