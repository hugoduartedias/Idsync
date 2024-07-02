'use client'

import { useState } from 'react'

export default function Profile({ user }: any) {
  const [name, setName] = useState(user?.name)

  function changeName(event: any) {
    setName(event.target.value)
  }

  return (
    <>
      <div className="mx-auto max-w-7xl">
        <h2 className="mt-10 md:px-9 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Perfil
        </h2>
      </div>
      <div className="mt-10 mx-auto max-w-7xl md:px-9">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Dados gerais
            </h3>
            <p className="mt-1 desc text-sm leading-5 text-gray-500">
              Informações sobre a sua conta
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="relative">
              <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                <div className="flex items-center flex-wrap">
                  <div className="w-full">
                    <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                      Foto
                    </label>
                    <div className="mt-2 flex items-center">
                      <span className="inline-block h-10 w-10 rounded-full overflow-hidden bg-gray-100">
                        <svg
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="h-full w-full text-gray-300"
                        >
                          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>{' '}
                      </span>{' '}
                      <span className="ml-5 rounded-md shadow-sm">
                        <button
                          type="button"
                          className="py-2 px-3 border border-gray-300 rounded-md text-sm leading-4 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition duration-150 ease-in-out"
                        >
                          Alterar
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Nome
                  </label>
                  <div>
                    {' '}
                    <input
                      type="text"
                      onChange={changeName}
                      value={name}
                      data-lpignore="true"
                      className="form-input block py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full"
                    />
                  </div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="text-sm">{user.email}</div>
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <span className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Salvar alterações
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
