import '@/components/Style.css'
import '@/components/Sweet.css'

export default function Check({ children }: any) {
  return (
    <html className="bg-white">
      <body className="h-full">
        <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          {children}
        </div>
      </body>
    </html>
  )
}
