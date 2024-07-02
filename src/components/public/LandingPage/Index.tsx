'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import Swal from 'sweetalert2'
// import { Player, Controls } from '@lottiefiles/react-lottie-player'
const Player = dynamic(
  () =>
    import('@lottiefiles/react-lottie-player').then((module) => module.Player),
  { ssr: false }
)
const Controls = dynamic(
  () =>
    import('@lottiefiles/react-lottie-player').then(
      (module) => module.Controls
    ),
  { ssr: false }
)

export function LandingPage() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')

  async function submit() {
    const response = await fetch('/api/squeezepage', {
      method: 'POST',
      body: JSON.stringify({ email })
    })
    const { status } = await response.json()
    Swal.fire('Sucesso!', 'Seu número foi cadastrado com sucesso.', 'sucess')
    setEmail('')
  }
  return (
    <>
      <div
        className={
          (mobileMenuVisible ? '' : 'hidden') +
          ' fixed w-full bg-white h-full z-10'
        }
      >
        <div className="flex justify-end">
          <div className="p-3 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={() => setMobileMenuVisible(false)}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <ul className="text-center mt-5">
          <li className="font-semibold">
            <Link
              className="py-2 block hover:bg-gray-300 hover:scale-105"
              href={{ pathname: '/login' }}
            >
              Login
            </Link>
          </li>
          <li className="font-semibold">
            <a className="py-2 block hover:bg-gray-300 hover:scale-105" href="">
              Produtos
            </a>
          </li>
          <li className="font-semibold">
            <a className="py-2 block hover:bg-gray-300 hover:scale-105" href="">
              Soluções
            </a>
          </li>
          <li className="font-semibold">
            <a className="py-2 block hover:bg-gray-300 hover:scale-105" href="">
              Recursos
            </a>
          </li>
          <li className="font-semibold">
            <a className="py-2 block hover:bg-gray-300 hover:scale-105" href="">
              Desenvolvedores
            </a>
          </li>
          <li className="font-semibold">
            <a className="py-2 block hover:bg-gray-300 hover:scale-105" href="">
              Ajuda
            </a>
          </li>
        </ul>
      </div>

      <header>
        <div className="px-3 flex justify-between items-center py-5 max-w-6xl mx-auto">
          <div>
            <img src="/logo-light.png" alt="" className="w-[120px]" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex gap-5 font-semibold">
              <li>
                <a href="">Produtos</a>
              </li>
              <li>
                <a href="">Soluções</a>
              </li>
              <li>
                <a href="">Recursos</a>
              </li>
              <li>
                <a href="">Desenvolvedores</a>
              </li>
              <li>
                <a href="">Ajuda</a>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex items-center hidden md:flex">
              <div className="font-semibold border-r border-gray-300 pe-5 me-5">
                <Link href={{ pathname: '/login' }}>Fazer login</Link>
              </div>
              <div>
                <button className="bg-[#0ee06e] rounded px-5 py-2 font-semibold">
                  Contato com vendas
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <div
                className="cursor-pointer"
                onClick={() => setMobileMenuVisible(true)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  className="bi bi-list"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mt-20 mb-20">
        <div className="px-3 xl:px-0 lg:flex justify-between items-center py-5 max-w-6xl mx-auto">
          <div className="me-4">
            <div>
              <h1 className="text-[#0ee06e] text-7xl font-bold">
                Bem-vindo à Idsync
              </h1>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                A Idsync é uma startup de verificação facial, documental e
                biometrica que ajuda empresas a combater a falsificação
                ideológica e lavagem de dinheiro.
              </p>
            </div>
            {/* <div className="mt-10 max-w-[650px] bg-[#003140] rounded-2xl text-white py-5 ps-5 pe-10 font-semibold">
              <p className="text-gray-300 font-semibold">
                Informe seu WhatsApp para receber um briefing e conhecer nossas
                soluções.
              </p>
              <div className="sm:flex gap-2 mt-5">
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Seu número"
                  className="bg-transparent border border-[#09546b] outline-none rounded px-5 py-2 w-full"
                />
                <button
                  type="button"
                  onClick={submit}
                  className="w-full sm:w-auto mt-3 sm:mt-0 bg-[#0ee06e] rounded px-5 py-2 font-semibold"
                >
                  Conhecer
                </button>
              </div>
            </div> */}
          </div>
          <div className="me-20 hidden lg:block">
            <Player
              src="/business-salesman.json"
              background="transparent"
              speed={1}
              style={{ width: '500px', height: '500px' }}
              loop
              className="w-[48rem] max-w-none rounded"
              autoplay
            ></Player>
          </div>
        </div>

        <div className="mt-20">
          <div className="px-3 xl:px-0 lg:flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div className="hidden xl:block">
              <Player
                src="https://lottie.host/2fdc5d33-6a05-454b-91f9-09d40bae7cd5/ld1cpzvqzo.json"
                background="transparent"
                speed={1}
                style={{ width: '400px', height: '400px' }}
                loop
                autoplay
              ></Player>
            </div>
            <div className="xl:ms-10">
              <h1 className="text-[#09546b] text-3xl lg:text-7xl font-bold">
                Autenticação segura
              </h1>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                Nossos métodos de autenticação biométrica e verificação de
                documento garantem a integridade dos dados e evitam fraudes.
              </p>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                Utilizamos tecnologias de ponta em criptografia e processamento
                de dados para blindar suas informações contra ataques
                cibernéticos.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="px-3 xl:px-0 lg:flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div className="xl:ms-10">
              <h1 className="text-[#09546b] text-3xl lg:text-7xl font-bold">
                Verificação de Documentos
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Realize verificação eficiente e segura de documentos de
                identidade com a nossa solução avançada.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Nosso sistema analisa as características de segurança, dados
                biométricos e autenticidade de documentos, garantindo a
                identidade real de cada usuário.
              </p>
            </div>
            <div className="hidden xl:block">
              <Player
                src="/face.json"
                background="transparent"
                speed={1}
                style={{ width: '500px', height: '250px' }}
                loop
                className="w-[48rem] max-w-none rounded"
                autoplay
              ></Player>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center gap-2 pt-20 mt-20">
            <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Plano Básico
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    {(1200).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>
                <div className="flex items-center justify-center mt-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check2-all text-[#4CAF50]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 ms-2">200 verificações</p>
                  </div>
                </div>

                <Link
                  href={{ pathname: '/register', search: 'plan=basico' }}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Faturas e recibos disponíveis para fácil reembolso da empresa
                </p>
              </div>
            </div>

            <div className="border rounded-2xl bg-gray-200 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 relative isolate overflow-hidden px-6 pt-16 shadow-2xl sm:rounded-3xl">
              <svg
                viewBox="0 0 1024 1024"
                className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true"
              >
                <circle
                  cx="512"
                  cy="512"
                  r="512"
                  fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
                  fill-opacity="0.7"
                ></circle>
                <defs>
                  <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                    <stop stop-color="#7775D6"></stop>
                    <stop offset="1" stop-color="#6535e9"></stop>
                  </radialGradient>
                </defs>
              </svg>
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Plano Intermediário
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    {(1000).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>

                <div className="flex items-center justify-center mt-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check2-all text-[#4CAF50]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 ms-2">500 verificações</p>
                  </div>
                </div>

                <Link
                  href={{ pathname: '/register', query: 'plan=intermediario' }}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-500">
                  Faturas e recibos disponíveis para fácil reembolso da empresa
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Plano Avançado
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    {(800).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>

                <div className="flex items-center justify-center mt-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check2-all text-[#4CAF50]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 ms-2">1000 verificações</p>
                  </div>
                </div>

                <Link
                  href={{ pathname: '/register', query: 'plan=advanced' }}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Faturas e recibos disponíveis para fácil reembolso da empresa
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center sm:grid sm:grid-cols-2 gap-2 max-w-5xl mx-auto mt-3">
            <div className="max-w-[320px] sm:max-w-full rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Plano Empresarial
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    {(600).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span>
                </p>
                <div className="flex items-center justify-center mt-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check2-all text-[#4CAF50]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 ms-2">1200 verificações</p>
                  </div>
                </div>

                <Link
                  href={{ pathname: '/register', search: 'plan=empresarial' }}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Faturas e recibos disponíveis para fácil reembolso da empresa
                </p>
              </div>
            </div>
            <div className="max-w-[320px] sm:max-w-full rounded-2xl bg-gray-100 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">
                  Plano Enterprise
                </p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-600">
                    {/* {(800).toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })} */}
                    Sob demanda
                  </span>
                  {/* <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                    BRL
                  </span> */}
                </p>

                <div className="flex items-center justify-center mt-5">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-check2-all text-[#4CAF50]"
                      viewBox="0 0 16 16"
                    >
                      <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0" />
                      <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 ms-2">
                      Acima de 1500 verificações
                    </p>
                  </div>
                </div>

                <Link
                  href={{
                    pathname: '/register',
                    query: 'plan=enterprise'
                  }}
                  className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Comprar
                </Link>
                <p className="mt-6 text-xs leading-5 text-gray-300">
                  Faturas e recibos disponíveis para fácil reembolso da empresa
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="px-3 xl:px-0 lg:flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div className="hidden xl:block">
              <Player
                src="/app2.json"
                background="transparent"
                speed={1}
                style={{ width: '500px', height: '500px' }}
                loop
                className="w-[48rem] max-w-none rounded-2xl"
                autoplay
              ></Player>
            </div>
            <div className="xl:ms-10">
              <h1 className="text-[#09546b] text-3xl lg:text-7xl font-bold">
                Soluções para Fintechs
              </h1>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                Nosso avançado sistema de verificação facial e de documentos
                garante a autenticidade de clientes em processos de onboarding e
                transações financeiras, protegendo sua fintech de fraudes.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="px-3 xl:px-0 lg:flex justify-between items-center py-5 max-w-6xl mx-auto">
            <div className="xl:ms-10">
              <h1 className="text-[#09546b] text-3xl lg:text-7xl font-bold">
                Quem somos
              </h1>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                Somos a Idsync, a startup que está mudando o jogo em segurança
                digital.
              </p>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                Nosso time de especialistas em tecnologia e segurança está
                liderando o caminho com soluções inovadoras para combater a
                falsificação de identidade e lavagem de dinheiro.
              </p>
              <p className="mt-5 text-gray-500 font-semibold max-w-[700px]">
                De Bancos Digitais a Empresas de Seguros, estamos ajudando
                empresas de todos os setores a manter suas informações seguras e
                confiáveis.
              </p>
            </div>
            <div className="hidden xl:block">
              <Player
                src="https://lottie.host/e6897bf6-c200-4eb2-b89c-1237b3dabe50/9GFtzyH0Xf.json"
                background="transparent"
                speed={1}
                style={{ width: '500px', height: '250px' }}
                loop
                className="w-[48rem] max-w-none rounded"
                autoplay
              ></Player>
            </div>
          </div>
        </div>
      </main>

      <footer className="mt-20 w-full mb-20" style={{ marginTop: '200px' }}>
        <div className="flex justify-center mx-auto max-w-7xl text-xs text-gray-400">
          <div>2024 - Todos os direitos reservados.</div>
          <div className="ms-10">
            <a href="" className="underline">
              Políticas de privacidade
            </a>
            <a href="" className="ms-2 underline">
              Termos de uso
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
