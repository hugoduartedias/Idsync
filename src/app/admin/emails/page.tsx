import Layout from '@/components/user/layouts/App'
import prisma from '@/../db'
import { cookies } from 'next/headers'
import Emails from '@/components/admin/Emails/Index'

export default async function Page() {
  const cookie = (await cookies().get('kycauth'))?.value

  const user = cookie
    ? await prisma.user.findFirst({
      where: { authToken: cookie }
    })
    : null

  const emails = cookie ? await prisma.email.findMany() : null

  return (
    <Layout user={user}>
      <Emails user={user} emails={emails} />
    </Layout>
  )
}
