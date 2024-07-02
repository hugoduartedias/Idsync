'use client'

export default function Documentation({ URL, user, purchase }: any) {
  return (
    <>
      <div className="sm:mx-auto sm:w-full sm:max-w-xl text-black">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Documentação da API
        </h2>
      </div>

      <div className="mt-4 sm:mx-auto sm:w-full sm:max-w-xl text-black">
        <div>
          {/* <h3 className="font-bold">Começo rápido</h3> */}
          <div className="text-xs mt-4">
            <p>
              Sua chave de API: <b>{purchase?.apikey}</b>
            </p>
            <p>
              Endpoint: <b>{URL}</b>
            </p>
          </div>
        </div>

        <div className="mt-10 text-black">
          <h3 className="font-semibold">Iniciar uma verificação</h3>

          <div className="bg-white border rounded-md p-5 mt-3 shadow-sm">
            <div className="flex gap-2">
              <div className="py-1 px-3 text-xs font-semibold rounded bg-indigo-300 inline-block">
                POST
              </div>{' '}
              <div className="font-semibold text-sm">/api/v1/generateLink</div>
            </div>

            <div className="text-xs">
              <div className="mt-2">Content-Type: application/json</div>
              <div className="mt-2">apikey: {purchase?.apikey}</div>
            </div>
            <div className="mt-5 font-semibold text-sm">
              {'{"callbackUrl": "https://seusite.com"}'}
            </div>
          </div>

          <div className="bg-white border rounded-md p-5 mt-3 shadow-sm">
            <div className="">
              <div className="py-1 px-3 text-xs font-semibold rounded bg-indigo-300 inline-block">
                RESPONSE
              </div>{' '}
            </div>
            <div className="mt-5 font-semibold text-sm">
              {`{\n\t"status": "success"\n\t"link": "${URL}/check?uuid=000000000..."\n}`}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
