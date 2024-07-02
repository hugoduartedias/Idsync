'use client'

import { Order, User } from '@prisma/client'
import Link from 'next/link'

export default function Orders({ URL, user, orders }: any) {
  function translateStatus(status: string): string {
    const statusList = {
      pending: 'Pendente',
      approved: 'Aprovado',
      canceled: 'Cancelado'
    } as any
    return statusList[status]
  }
  return (
    <>
      <div>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Pedidos
        </h2>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <div className="bg-white rounded-md shadow">
          <div className="grid grid-cols-3 font-semibold py-5">
            <div className="text-center">#</div>
            <div>Total</div>
            <div>Status</div>
            <div>Criado em</div>
          </div>
          {orders.map((order: Order) => {
            return (
              <div className="divide-y divide-gray-100 border-b">
                <div className="grid grid-cols-3 px-4 py-6 ">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    <Link
                      href={`/admin/orders/${order.id}/edit`}
                      className="text-indigo-600"
                    >
                      #{order.id}
                    </Link>
                  </div>
                  <div className="font-semibold">
                    R${' '}
                    {order.total.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2
                    })}
                  </div>
                  <div>{translateStatus(order.status)}</div>
                  <div>{'' + order.createdAt}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
