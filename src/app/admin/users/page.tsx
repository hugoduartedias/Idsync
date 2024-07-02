import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import Users from '@/components/admin/Users/Index'

export default async function Page() {
  const cookie = (await cookies().get('kycauth'))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const users = cookie ? await prisma.user.findMany() : null

  return (
    <Layout user={user}>
      <Users user={user} users={users} />
    </Layout>
  )
}
