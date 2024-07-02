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

export function SqueezePage() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [number, setNumber] = useState<string>('')

  async function submit() {
    const response = await fetch('/api/squeezepage', {
      method: 'POST',
      body: JSON.stringify({ email, number })
    })
    const { status } = await response.json()
    Swal.fire('Sucesso!', 'Seu número foi cadastrado com sucesso.', 'success')
    setEmail('')
    document?.getElementById('linkEbook')?.click()
  }
  return (
    <>
      <a
        href="/Desafios-de-Seguranca-no-Mundo-Digital.pdf"
        download
        id="linkEbook"
      ></a>
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
            <div className="mt-10 max-w-[650px] bg-[#003140] rounded-2xl text-white py-5 ps-5 pe-10 font-semibold">
              <p className="text-gray-300 font-semibold">
                Informe seu WhatsApp para receber um briefing e conhecer nossas
                soluções.
              </p>
              <div className="sm:flex gap-2 mt-5">
                <input
                  type="text"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="E-mail"
                  className="bg-transparent mb-2 border border-[#09546b] outline-none rounded px-5 py-2 w-full"
                />
                <input
                  type="text"
                  value={number}
                  onChange={(event) => setNumber(event.target.value)}
                  placeholder="Seu número"
                  className="bg-transparent mb-2 border border-[#09546b] outline-none rounded px-5 py-2 w-full"
                />
                <button
                  type="button"
                  onClick={submit}
                  className="w-full sm:w-auto mb-2 mt-3 sm:mt-0 bg-[#0ee06e] rounded px-5 py-2 font-semibold"
                >
                  Conhecer
                </button>
              </div>
            </div>
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
                src="https://lottie.host/e6897bf6-c200-4eb2-b89c-1237b3dabe50/9GFtzyH0Xf.json"
                background="transparent"
                speed={1}
                style={{ width: '500px', height: '250px' }}
                loop
                className="w-[48rem] max-w-none rounded"
                autoplay
              ></Player>
            </div>
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
          </div>
        </div>
      </main>

      <footer className="mt-20 w-full mb-20">
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
