'use client'

import { Email, User } from '@prisma/client'
import Link from 'next/link'

export default function Emails({ URL, user, emails }: any) {
  return (
    <>
      <div>
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Números
        </h2>
      </div>

      <div className="mt-6 border-t border-gray-100">
        <div className="bg-white rounded-md shadow">
          <div className="grid grid-cols-3 font-semibold p-5">
            <div>E-mail</div>
            <div>Número de WhatsApp</div>
          </div>
          {emails.map((email: Email) => {
            return (
              <div className="divide-y divide-gray-100 border-b">
                <div className="grid grid-cols-3 px-4 py-6 ">
                  <div>{email.email}</div>
                  <div>{email.number}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
