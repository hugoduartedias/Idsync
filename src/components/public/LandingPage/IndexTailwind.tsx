'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, LinkIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Player, Controls } from '@lottiefiles/react-lottie-player'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon
} from '@heroicons/react/20/solid'
import Link from 'next/link'

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' }
]

const stats = [
  { id: 1, name: 'Fraudes previnidas', value: '5 mil' },
  { id: 2, name: 'Verificações de rostos', value: '250 mil' },
  { id: 3, name: 'Usuários', value: '10 mil' }
]

const features = [
  {
    name: 'Push to deploy.',
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    icon: CloudArrowUpIcon
  },
  {
    name: 'SSL certificates.',
    description:
      'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
    icon: LockClosedIcon
  },
  {
    name: 'Database backups.',
    description:
      'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
    icon: ServerIcon
  }
]

export function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="bg-slate-900 relative z-50 w-full flex-none text-sm font-semibold leading-6 text-slate-900">
        <nav
          aria-label="Global"
          className="mx-auto max-w-container px-4 sm:px-6 lg:px-8"
        >
          <div className="relative flex items-center py-[2.125rem]">
            <a className="flex-none text-slate-900" href="/">
              <Image
                className="w-auto"
                src="/logo.png"
                alt=""
                width={100}
                height={30}
              />
            </a>
            {/* <a
              href="https://tailwindcss.com/blog/introducing-catalyst"
              className="group -my-2 ml-6 hidden items-center gap-2 rounded-full bg-white/25 px-3 py-2 text-xs text-slate-900 ring-1 ring-inset ring-black/[0.08] hover:bg-white/50 hover:ring-black/[0.13] sm:flex md:ml-8 lg:hidden min-[1300px]:flex"
            >
              <svg className="h-4 w-4 fill-sky-500" viewBox="0 0 24 24">
                <path
                  fill-rule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span className="font-semibold">Introducing Catalyst</span>
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                className="fill-slate-900"
              >
                <circle cx="1" cy="1" r="1"></circle>
              </svg>
              <span className="font-medium">
                <span className="md:hidden">Our new React UI kit</span>
                <span className="hidden md:inline">
                  A modern application UI kit for React
                </span>
              </span>
              <svg
                viewBox="0 0 5 8"
                className="h-2 w-[5px] fill-black/30 group-hover:fill-black/60"
                fill-rule="evenodd"
                clip-rule="evenodd"
                aria-hidden="true"
              >
                <path d="M.2.24A.75.75 0 0 1 1.26.2l3.5 3.25a.75.75 0 0 1 0 1.1L1.26 7.8A.75.75 0 0 1 .24 6.7L3.148 4 .24 1.3A.75.75 0 0 1 .2.24Z"></path>
              </svg>
            </a> */}
            <div className="ml-auto text-gray-300 hidden lg:flex lg:items-center">
              <a href="/components">Preços</a>
              <a className="ml-8 text-gray-300" href="/templates">
                Contato
              </a>
            </div>
            <button
              type="button"
              className="-my-1 -mr-1 ml-6 flex h-8 w-8 items-center justify-center lg:hidden"
            >
              <span className="sr-only">Open navigation</span>
              <svg viewBox="0 0 24 24" className="h-6 w-6 stroke-slate-900">
                <path
                  d="M3.75 12h16.5M3.75 6.75h16.5M3.75 17.25h16.5"
                  fill="none"
                  stroke-width="1.5"
                  stroke-linecap="round"
                ></path>
              </svg>
            </button>
            <div className="text-gray-300 hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-800 lg:pl-8">
              <Link href={{ pathname: '/login' }}>Entrar</Link>
              <Link
                href={{ pathname: '/register', query: 'plan=starter' }}
                className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-700 -my-2.5 ml-8"
              >
                <span>
                  Adquirir <span aria-hidden="true">→</span>
                </span>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <div className="bg-slate-900">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-10">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className=" relative rounded-full px-3 py-1 text-sm font-semibold leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Plataforma de verificação de identidade
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
                Inteligência artificial para prevenir fraudes
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                A IDSync é uma startup de verificação facial, documental e
                biométrica que ajuda empresas a combater a falsificação
                ideológica e a lavagem de dinheiro. Nosso objetivo é melhorar a
                segurança das operações em diversos setores, desde fintechs e
                bancos digitais até empresas de seguros e construção civil.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Fale conosco
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-300"
                >
                  Conheça nossas soluções <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute top-0 inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
              }}
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-900">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
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
              />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Proposta de valor
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                É empoderar empresas de todos os setores com soluções avançadas
                de verificação de identidade. Lutamos contra a falsificação
                ideológica e a lavagem de dinheiro para proteger a integridade
                dos negócios. Nosso objetivo é oferecer uma plataforma confiável
                e segura para validação biométrica, documental e de endereço.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link
                  href={{ pathname: '/register', query: 'plan=starter' }}
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  Adquirir
                </Link>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-white"
                >
                  Saiba mais <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <div className="rounded-xl w-full mt-16 h-80">
              <img
                className="rounded-xl mx-auto"
                src="/kyc.png"
                alt="App screenshot"
                width="500"
                height="500"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 overflow-hidden pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Quem somos?
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Somos a Idsync, uma startup pioneira em soluções de
                  verificação de identidade e prevenção a fraudes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Nossa equipe é composta por especialistas em tecnologia e
                  segurança digital, dedicados a desenvolver e fornecer métodos
                  seguros e eficazes para ajudar as empresas a enfrentar
                  desafios como a falsificação de identidade e a lavagem de
                  dinheiro.
                </p>
              </div>
            </div>

            {/* <Player
              src="/business-salesman.json"
              background="transparent"
              speed={1}
              style={{
                width: '500px',
                height: '500px',
                position: 'relative',
                top: '-50px'
              }}
              loop
              autoplay
            ></Player> */}
            {/* <img
              src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            /> */}
            <Image src="/quem-somos.png" width={500} height={300} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center bg-slate-900 gap-2 py-20">
        <div className="rounded-2xl bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-300">
              Plano Starter
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-300">
                {(250).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2
                })}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                BRL
              </span>
            </p>
            <Link
              href={{ pathname: '/register', query: 'plan=starter' }}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Comprar
            </Link>
            <p className="mt-6 text-xs leading-5 text-gray-300">
              Faturas e recibos disponíveis para fácil reembolso da empresa
            </p>
          </div>
        </div>

        <div className="border-indigo-600 border rounded-2xl bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl">
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
                <stop offset="1" stop-color="#E935C1"></stop>
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-300">
              Plano Business
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-300">
                {(450).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2
                })}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                BRL
              </span>
            </p>
            <Link
              href={{ pathname: '/register', query: 'plan=business' }}
              className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Comprar
            </Link>
            <p className="mt-6 text-xs leading-5 text-gray-300">
              Faturas e recibos disponíveis para fácil reembolso da empresa
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-slate-800 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-base font-semibold text-gray-300">
              Plano Enterprise
            </p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-300">
                {(650).toLocaleString('pt-BR', {
                  minimumFractionDigits: 2
                })}
              </span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                BRL
              </span>
            </p>
            <Link
              href={{ pathname: '/register', query: 'plan=enterprise' }}
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

      <div className="bg-slate-900 overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* <Player
              src="/bar-chart.json"
              background="transparent"
              speed={1}
              style={{
                width: '500px',
                height: '500px',
                position: 'relative',
                top: '-25px'
              }}
              loop
              autoplay
            ></Player> */}
            <div className="pt-10">
              <div className="flex justify-center">
                <Image src="/chart.png" width={400} height={300} alt="" />
              </div>
            </div>
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Soluções para Fintechs
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Nosso avançado sistema de verificação facial e de documentos
                  garante a autenticidade de clientes em processos de onboarding
                  e transações financeiras, protegendo sua fintech de fraudes.
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <svg
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z"
                        />
                      </svg>
                      Autenticação segura
                    </dt>{' '}
                    <dd className="inline">
                      Nossos métodos de autenticação biométrica e verificação de
                      documento garantem a integridade dos dados e evitam
                      fraudes.
                    </dd>
                  </div>
                </dl>
                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline font-semibold text-gray-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
                        />
                      </svg>
                      Proteção avançada
                    </dt>{' '}
                    <dd className="inline">
                      Utilizamos tecnologias de ponta em criptografia e
                      processamento de dados para blindar suas informações
                      contra ataques cibernéticos.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Verificação facial
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Somos a Idsync, uma startup pioneira em soluções de
                  verificação de identidade e prevenção a fraudes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  A verificação facial é um dos nossos pilares mais importantes.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Utilizamos tecnologia de ponta para fazer uma análise
                  biométrica precisa do rosto de cada usuário, garantindo a
                  identidade autêntica e evitando fraudes.
                </p>
              </div>
            </div>

            {/* <Player
              src="/face.json"
              background="transparent"
              speed={1}
              style={{ width: '300px', height: '300px' }}
              loop
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
              autoplay
            ></Player> */}
            <div>
              <div className="w-full flex justify-center">
                <Image src="/face.png" width={250} height={300} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-slate-900 overflow-hidden py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {/* <Player
              src="/singing-contract.json"
              background="transparent"
              speed={1}
              style={{
                width: '500px',
                height: '500px',
                position: 'relative',
                top: '-25px'
              }}
              loop
              autoplay
            ></Player> */}
            <Image
              src="/verificacao-documentos.png"
              width={400}
              height={300}
              alt=""
            />
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-600">
                  Deploy faster
                </h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
                  Verificação de Documentos
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Realize verificação eficiente e segura de documentos de
                  identidade com a nossa solução avançada.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Nosso sistema analisa as características de segurança, dados
                  biométricos e autenticidade de documentos, garantindo a
                  identidade real de cada usuário.
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Combine a verificação documental com outras soluções de nossa
                  plataforma, como reconhecimento facial e comprovação de
                  endereço, para obter uma identificação completa e confiável.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg"
              alt="Transistor"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg"
              alt="Reform"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg"
              alt="Tuple"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg"
              alt="SavvyCal"
              width={158}
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg"
              alt="Statamic"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div> */}
      <div className="bg-slate-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="mx-auto flex max-w-xs flex-col gap-y-4 text-gray-300"
              >
                <dt className="text-base leading-7 text-gray-300">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-300 sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <footer className="bg-slate-900 mx-auto w-full max-w-container px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-900/5 py-10">
          <Image
            className="mx-auto h-5 w-auto text-slate-900"
            src="/logo.png"
            alt=""
            width={100}
            height={30}
          />
          <p className="mt-5 text-center text-sm leading-6 text-slate-500">
            ©2024 IDSync Inc. Todos os direitos reservados.
          </p>
          <div className="mt-16 flex items-center justify-center space-x-4 text-sm font-semibold leading-6 text-slate-700">
            <a href="/privacy-policy">Políticas de privacidade</a>
            <div className="h-4 w-px bg-slate-500/20"></div>
            <a href="/useterms">Termos de uso</a>
          </div>
        </div>
      </footer>
    </>
  )
}
