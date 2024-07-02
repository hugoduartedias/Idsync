import Profile from '@/components/user/Profile/Index'
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

  return (
    <Layout user={user}>
      <Profile user={user} />
    </Layout>
  )
}
