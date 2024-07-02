'use client'

import { User } from '@prisma/client'
import Link from 'next/link'
import { useState } from 'react'

export default function Edit({ URL, user, row }: any) {
  const [name, setName] = useState(row?.name)

  function changeName(event: any) {
    setName(event.target.value)
  }
  return (
    <>
      <div>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Pedidos
        </h2>
      </div>

      <div className="mt-10">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Dados gerais
            </h3>
            <p className="mt-1 desc text-sm leading-5 text-gray-500">
              Informações sobre o pedido
            </p>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="relative">
              <div className="px-4 py-5 bg-white sm:p-6 rounded-lg">
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    ID
                  </label>
                  <div className="text-sm">{row.id}</div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    ID do Gateway
                  </label>
                  <div className="text-sm">{row.tid}</div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Total
                  </label>
                  <div className="text-sm">{row.total}</div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Total
                  </label>
                  <div className="text-sm">{row.status}</div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Criado em
                  </label>
                  <div className="text-sm">{' ' + row.createdAt}</div>
                </div>
                <div className="w-auto max-w-xs mt-8">
                  <label className="block text-sm font-medium leading-5 text-gray-700 mb-1">
                    Plano
                  </label>
                  <div className="text-sm">{row.plan.name}</div>
                </div>
              </div>
            </div>
            {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <span className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150">
                Salvar alterações
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
