'use client'

import { Plan } from '@prisma/client'
import Link from 'next/link'

export default function Plans({ user, balance, plans, order }: any) {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-2xl text-black">
        <div className="flex justify-between mt-10">
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Planos
          </h2>
          <div className="text-sm font-semibold">
            <span></span>
            {/* {balance.amount.toLocaleString('pt-br', {
              minimumFractionDigits: 2
            })} */}
            {order?.id ? order.plan.name : ''}
          </div>
        </div>

        <div>
          {plans.map((plan: Plan) => {
            if (plan.slug !== 'teste') {
              return (
                <div
                  key={plan.id}
                  className="bg-white mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-4 lg:mx-0 lg:flex lg:max-w-none py-5"
                >
                  <div className="p-8 sm:p-10 max-w-xs lg:flex-auto">
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                      {plan.name}
                    </h3>
                    <p className="mt-6 text-base leading-7 text-gray-600">
                      {plan.description}
                    </p>
                    {/* <div className="mt-2 flex items-center gap-x-4">
                    <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                      O que tem incluso
                    </h4>
                    <div className="h-px flex-auto bg-gray-100"></div>
                  </div>
                  <ul
                    role="list"
                    className="mt-2 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                  >
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Private forum access
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Member resources
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Entry to annual conference
                    </li>
                    <li className="flex gap-x-3">
                      <svg
                        className="h-6 w-5 flex-none text-indigo-600"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Official member t-shirt
                    </li>
                  </ul> */}
                  </div>
                  <div className="-mt-2 p-2">
                    <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                      <div className="mx-auto max-w-xs px-8">
                        <p className="text-base font-semibold text-gray-600">
                          Preço
                        </p>
                        <p className="mt-6 flex items-baseline justify-center gap-x-2">
                          <span className="text-5xl font-bold tracking-tight text-gray-900">
                            {plan.price.toLocaleString('pt-BR', {
                              minimumFractionDigits: 2
                            })}
                          </span>
                          <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                            BRL
                          </span>
                        </p>
                        {order?.id && order?.plan.id === plan.id
                          ? (
                          <a className="mt-10 block w-full rounded-md bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Plano em vigor
                          </a>
                            )
                          : order?.slug === 'enterprise'
                            ? (
                          <a className="mt-10 block w-full rounded-md bg-gray-300 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Sob demanda
                          </a>
                              )
                            : (
                          <Link
                            href={{
                              pathname: `/user/plan/${plan.id}/checkout`
                            }}
                            className="cursor-pointer mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                          >
                            Mudar para este plano
                          </Link>
                              )}
                        <p className="mt-6 text-xs leading-5 text-gray-600">
                          Faturas e recibos disponíveis para fácil reembolso da
                          empresa
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
            return ''
          })}
        </div>
      </div>
    </>
  )
}
