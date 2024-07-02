import Check from '@/components/public/Check/Index'
import Layout from '@/components/public/layouts/Check'
import { NextRequest } from 'next/server'
import prisma from '@/../db'

export default async function Page(req: NextRequest) {
  const { uuid } = req.searchParams
  const verification = await prisma.verification.findFirst({
    where: { uuid }
  })
  console.log(verification)
  if (verification?.status === 'pending') {
    return (
      <Layout>
        <Check uuid={uuid} callbackUrl={verification?.callbackUrl} />
      </Layout>
    )
  } else if (verification?.status === 'invalid') {
    return (
      <Layout>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-black">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Error
          </h2>
          <p className="mt-4 text-center">
            Esta verificação não pôde ser iniciada.
          </p>
        </div>
      </Layout>
    )
  } else if (verification?.status === 'valid') {
    return (
      <Layout>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-black">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sucesso!
          </h2>
          <p className="mt-4 text-center">Esta verificação já foi validada.</p>
        </div>
      </Layout>
    )
  } else {
    return (
      <Layout>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm text-black">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Erro!
          </h2>
          <p className="mt-4 text-center">
            Nenhuma validação iniciada para este ID.
          </p>
        </div>
      </Layout>
    )
  }
}
