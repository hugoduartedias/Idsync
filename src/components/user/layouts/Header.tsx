'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Header({ user }: any) {
  const router = useRouter()

  function redirect(uri: string) {
    router.push(uri)
  }

  async function logout() {
    const response = await fetch('/api/logout', {
      headers: { 'Content-Type': 'application/json' },
      method: 'POST'
    })
    const { status } = await response.json()
    if (status === 'success') redirect('/login')
  }

  return (
    <>
      <header className="bg-white border-b">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between h-[65px]"
          aria-label="Global"
        >
          <div>
            <div>
              <Image
                className="w-auto ml-5"
                src="/logo-light.png"
                alt=""
                width={100}
                height={30}
              />
            </div>
          </div>

          <div className="flex items-center">
            <div>
              <ul className="py-3 flex px-2 pt-2 relative">
                <li className={user?.role === 'admin' ? '' : 'hidden'}>
                  <Link
                    href={{ pathname: '/user/dashboard' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-speedometer text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 2a.5.5 0 0 1 .5.5V4a.5.5 0 0 1-1 0V2.5A.5.5 0 0 1 8 2M3.732 3.732a.5.5 0 0 1 .707 0l.915.914a.5.5 0 1 1-.708.708l-.914-.915a.5.5 0 0 1 0-.707M2 8a.5.5 0 0 1 .5-.5h1.586a.5.5 0 0 1 0 1H2.5A.5.5 0 0 1 2 8m9.5 0a.5.5 0 0 1 .5-.5h1.5a.5.5 0 0 1 0 1H12a.5.5 0 0 1-.5-.5m.754-4.246a.39.39 0 0 0-.527-.02L7.547 7.31A.91.91 0 1 0 8.85 8.569l3.434-4.297a.39.39 0 0 0-.029-.518z" />
                      <path
                        fillRule="evenodd"
                        d="M6.664 15.889A8 8 0 1 1 9.336.11a8 8 0 0 1-2.672 15.78zm-4.665-4.283A11.95 11.95 0 0 1 8 10c2.186 0 4.236.585 6.001 1.606a7 7 0 1 0-12.002 0"
                      />
                    </svg>
                    <span className="pl-2">Dashboard</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>

                  <Link
                    href={{ pathname: '/admin/orders' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-cash text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                    </svg>
                    <span className="pl-2">Pedidos</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>

                  <Link
                    href={{ pathname: '/admin/users' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-people-fill text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                    </svg>
                    <span className="pl-2">Usuários</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>
                  <Link
                    href={{ pathname: '/admin/emails' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    {/* <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-envelope"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                    </svg> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>
                    <span className="pl-2">Números de WhatsApp</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>
                  <Link
                    href={{ pathname: '/user/profile' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-bag-check-fill text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"
                      />
                    </svg>
                    <span className="pl-2">Soluções</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>
                  <Link
                    href={{ pathname: '/user/profile' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-briefcase-fill text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5" />
                      <path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85z" />
                    </svg>
                    <span className="pl-2">Plataforma</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>
                  <Link
                    href={{ pathname: '/user/profile' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-boxes text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.752.066a.5.5 0 0 1 .496 0l3.75 2.143a.5.5 0 0 1 .252.434v3.995l3.498 2A.5.5 0 0 1 16 9.07v4.286a.5.5 0 0 1-.252.434l-3.75 2.143a.5.5 0 0 1-.496 0l-3.502-2-3.502 2.001a.5.5 0 0 1-.496 0l-3.75-2.143A.5.5 0 0 1 0 13.357V9.071a.5.5 0 0 1 .252-.434L3.75 6.638V2.643a.5.5 0 0 1 .252-.434zM4.25 7.504 1.508 9.071l2.742 1.567 2.742-1.567zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571zm1 3.134 2.75 1.571v-3.134L8.5 9.933zm.508-3.996 2.742 1.567 2.742-1.567-2.742-1.567zm2.242-2.433V3.504L8.5 5.076V8.21zM7.5 8.21V5.076L4.75 3.504v3.134zM5.258 2.643 8 4.21l2.742-1.567L8 1.076zM15 9.933l-2.75 1.571v3.134L15 13.067zM3.75 14.638v-3.134L1 9.933v3.134z" />
                    </svg>
                    <span className="pl-2">Segmentos</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>

                  <Link
                    href={{ pathname: '/user/profile' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-box2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M2.95.4a1 1 0 0 1 .8-.4h8.5a1 1 0 0 1 .8.4l2.85 3.8a.5.5 0 0 1 .1.3V15a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4.5a.5.5 0 0 1 .1-.3zM7.5 1H3.75L1.5 4h6zm1 0v3h6l-2.25-3zM15 5H1v10h14z" />
                    </svg>
                    <span className="pl-2">Recursos</span>
                  </Link>
                </li>
                <li className={user?.role === 'admin' ? '' : 'hidden'}>

                  <Link
                    href={{ pathname: '/user/profile' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-building-fill text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 0a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h3v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V16h3a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm1 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5M4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5m2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5" />
                    </svg>
                    <span className="pl-2">Institucional</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: '/user/documentation' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-box-fill text-gray-400"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15.528 2.973a.75.75 0 0 1 .472.696v8.662a.75.75 0 0 1-.472.696l-7.25 2.9a.75.75 0 0 1-.557 0l-7.25-2.9A.75.75 0 0 1 0 12.331V3.669a.75.75 0 0 1 .471-.696L7.443.184l.004-.001.274-.11a.75.75 0 0 1 .558 0l.274.11.004.001zm-1.374.527L8 5.962 1.846 3.5 1 3.839v.4l6.5 2.6v7.922l.5.2.5-.2V6.84l6.5-2.6v-.4l-.846-.339Z"
                      />
                    </svg>
                    <span className="pl-2">Integração da API</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={{ pathname: '/user/plans' }}
                    className="mt-1 group flex items-center hover:scale-105 transform px-2 py-2 text-sm leading-5 font-medium rounded-md focus:outline-none transition ease-in-out duration-150 cursor-pointer text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none"
                    aria-current="page"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      className="bi bi-cash"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                      <path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z" />
                    </svg>
                    <span className="pl-2">Plano</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex items-center md:mr-6">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <Menu.Button>
                  <div className="relative inline-block">
                    <div slot="reference">
                      <span className="rounded-md block relative">
                        <div id="options-menu" className="focus:outline-none">
                          <div className="inline-flex justify-end items-center w-full text0-m rounded-md focus:outline-none px-2 py-2 text-white leading-5 transition ease-in-out duration-150">
                            <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="h-full w-full text-gray-300"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                              </svg>
                            </span>
                          </div>
                        </div>
                      </span>
                    </div>
                  </div>
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <Link
                          href={{ pathname: '/user/profile' }}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Perfil
                        </Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          onClick={logout}
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Sair
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </nav>
      </header>
    </>
  )
}
