'use client'
import { useState, CSSProperties, useEffect, Suspense } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams, redirect } from 'next/navigation'
import Swal from 'sweetalert2'
import { PuffLoader } from 'react-spinners'

const override: CSSProperties = {
  display: 'block',
  margin: '0 auto',
  borderColor: 'white'
}

function Component() {
  const [loading, setLoading] = useState(true)
  const [color, setColor] = useState('#ffffff')

  const router = useRouter()

  const searchParams = useSearchParams()
  const plan = searchParams.get('plan')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const [submitted, setSubmitted] = useState(false)

  function changeName(event: any) {
    setName(event.target.value)
  }

  function changeEmail(event: any) {
    setEmail(event.target.value)
  }

  function changePassword(event: any) {
    setPassword(event.target.value)
  }

  function changeConfirmPassword(event: any) {
    setConfirmPassword(event.target.value)
  }

  async function submit() {
    setSubmitted(true)
    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, password, confirmPassword, plan })
    })

    const { auth, role, url, status, message } = await response.json()

    setSubmitted(false)

    if (auth) {
      window.location.href = url
      // router.push(role === 'admin' ? '/admin/dashboard' : '/user/dashboard')
    } else {
      if (status === 'error') Swal.fire('Erro!', message, 'error')
    }
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
          Faça seu cadastro
        </h2>

        <p className="text-sm mt-3 text-gray-500">
          Preencha os campos abaixo para ingressar no sistema.
        </p>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Nome
              </label>
              <div className="mt-2">
                <input
                  onChange={changeName}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                E-mail
              </label>
              <div className="mt-2">
                <input
                  onChange={changeEmail}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Senha
              </label>
              <div className="mt-2">
                <input
                  onChange={changePassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Confirmar senha
              </label>
              <div className="mt-2">
                <input
                  onChange={changeConfirmPassword}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
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
                <div className="flex">
                  <div className={submitted ? '' : 'hidden'}>
                    <PuffLoader size={25} color="white" />
                  </div>
                  <div className={!submitted ? '' : 'hidden'}>Cadastrar</div>
                </div>
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            {/* TODO: redirecionar id do plano junto */}
            Já possui uma conta?{' '}
            <Link
              href={{
                pathname: '/login',
                query: plan ? 'plan=' + plan : ''
              }}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Clique aqui para entrar
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Register() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <Suspense>
          <Component />
        </Suspense>
      </>
    )
  )
}
