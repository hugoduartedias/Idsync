'use client'

import { User } from '@prisma/client'
import Link from 'next/link'

export default function Orders({ URL, user, purchase, users }: any) {
  return (
    <>
      <div>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Usuários
        </h2>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <div className="bg-white rounded-md shadow">
          <div className="grid grid-cols-3 font-semibold p-5">
            <div>Nome</div>
            <div>E-mail</div>
          </div>
          {users.map((user: User) => {
            return (
              <div className="divide-y divide-gray-100 border-b">
                <div className="grid grid-cols-3 px-4 py-6 ">
                  <div className="text-sm font-medium leading-6 text-gray-900">
                    <Link
                      href={`/admin/users/${user.id}/edit`}
                      className="text-indigo-600"
                    >
                      {user.name}
                    </Link>
                  </div>
                  <div>{user.email}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
