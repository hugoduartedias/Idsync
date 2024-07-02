import Documentation from '@/components/user/Documentation/Index'
import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import { env } from 'node:process'

export default async function Page() {
  const { URL } = env
  const cookie = (await cookies().get('kycauth'))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const purchase = await prisma.purchase.findFirst({
    orderBy: { createdAt: 'desc' },
    where: { userId: user?.id, status: true }
  })

  return (
    <Layout user={user}>
      <Documentation URL={URL as string} user={user} purchase={purchase} />
    </Layout>
  )
}
