'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useEffect, Suspense } from 'react'

function Component() {
  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const router = useRouter()

  async function submit() {
    const response = await fetch('/api/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    const { auth, role } = await response.json()

    if (auth) {
      router.push(role === 'admin' ? '/admin/users' : '/user/plans')
    }
  }

  function changeEmail(event: any) {
    setEmail(event.target.value)
  }

  function changePassword(event: any) {
    setPassword(event.target.value)
  }

  return (
    <div className="md:mx-auto md:w-full md:max-w-sm">
      <div className="bg-white rounded shadow-xl px-10 py-12">
        <Image
          className="mx-auto h-10 w-auto bg-gray-900 rounded px-5"
          src="/logo.png"
          alt="Your Company"
          width="100"
          height="100"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Acesse sua conta
        </h2>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={changeEmail}
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Senha
                </label>
                {/* <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={changePassword}
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                onClick={submit}
                type="button"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Entrar
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Não possui uma conta?{' '}
            <Link
              href={{
                pathname: '/register',
                query: plan ? 'plan=' + plan : ''
              }}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Registre-se
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Login() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <Suspense>
        <Component />
      </Suspense>
    )
  )
}
