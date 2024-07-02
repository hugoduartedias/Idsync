import '@/components/Style.css'
import '@/components/Sweet.css'

export default function Form({ children }: any) {
  return (
    <html className="h-full bg-gray-300">
      <body className="h-full">
        <div className="bg-gray-300 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {children}
        </div>

        <div className="flex justify-between text-xs text-gray-400 md:mx-auto max-w-2xl">
          <div className="mb-10">
            <p>Facecheck 2024 - Todos os direitos reservados.</p>
          </div>
          <div className="flex gap-2">
            <a className="text-indigo-400 cursor-pointer hover:underline">
              Termos de uso
            </a>
            <a className="text-indigo-400 cursor-pointer hover:underline">
              Políticas de privacidade
            </a>
          </div>
        </div>
      </body>
    </html>
  )
}
