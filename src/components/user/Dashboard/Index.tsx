'use client'

import { useState, useEffect } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { PieChart } from '@mui/x-charts/PieChart'
import { LineChart } from '@mui/x-charts/LineChart'
import { Order } from '@prisma/client'

export default function Register({
  user,
  countUsers,
  countApprovedOrders,
  countApprovedAvgOrders,
  approvedOrders,
  countOrders,
  countEmails
}: any) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <>
        <div className="">
          <div className="pb-20">
            <div>
              <div className="grid md:grid-cols-4 gap-2">
                <div className="text-end mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <span>Receita total </span>
                  <div className="text-3xl font-semibold">
                    {(countApprovedAvgOrders?._avg?.total || 0)?.toLocaleString(
                      'pt-BR',
                      {
                        style: 'currency',
                        currency: 'BRL',
                        minimumFractionDigits: 2
                      }
                    )}
                  </div>
                </div>
                <div className="text-end mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <span>Usuários </span>
                  <div className="text-3xl font-semibold">{countUsers}</div>
                </div>
                <div className="text-end mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <span>Leads </span>
                  <div className="text-3xl font-semibold">{countEmails}</div>
                </div>
                <div className="text-end mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <span>Clientes ativos </span>
                  <div className="text-3xl font-semibold">
                    {countApprovedOrders}
                  </div>
                </div>
              </div>

              <div className="lg:flex w-full gap-2">
                <div className="lg:w-[50%] mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <h2 className="mb-10 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Taxa de aprovações
                  </h2>
                  <div>
                    <BarChart
                      series={[
                        { data: [35, 44, 24, 34] },
                        { data: [51, 6, 49, 30] },
                        { data: [15, 25, 30, 50] },
                        { data: [60, 50, 15, 25] }
                      ]}
                      height={290}
                      xAxis={[
                        { data: ['Q1', 'Q2', 'Q3', 'Q4'], scaleType: 'band' }
                      ]}
                      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                    />
                  </div>
                </div>
                <div className="lg:w-[50%] mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                  <h2 className="mb-10 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    Conversões
                  </h2>
                  <div className="flex">
                    <PieChart
                      series={[
                        {
                          data: [
                            {
                              id: 0,
                              value: countApprovedOrders,
                              label: 'Aprovado'
                            },
                            { id: 1, value: countOrders, label: 'Pendente' }
                          ]
                        }
                      ]}
                      width={400}
                      height={200}
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 bg-white rounded-md shadow p-5">
                <h2 className="mb-10 mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                  Vendas
                </h2>
                <div className="flex">
                  <LineChart
                    xAxis={[
                      {
                        scaleType: 'band',
                        data: approvedOrders.map((order: Order) => {
                          const dd = order?.createdAt?.getDate()
                          const mm: number = Number(
                            order?.createdAt?.getMonth()
                          )
                          return `${dd}/${mm + 1}`
                        })
                      }
                    ]}
                    series={[
                      {
                        data: approvedOrders.map(
                          (order: Order) => order.total
                          //   ?.toLocaleString('pt-BR', {
                          //   style: 'currency',
                          //   currency: 'BRL',
                          //   minimumFractionDigits: 2
                          // })
                        ),
                        area: true
                      }
                    ]}
                    width={1300}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  )
}
