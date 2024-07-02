import Header from '@/components/user/layouts/Header'
import Sidebar from '@/components/user/layouts/Sidebar'

export default function App({ children, user }: any) {
  return (
    <html className="bg-gray-100">
      <body className="h-full">
        <Header user={user} />
        <div className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
          {/* <Sidebar user={user} /> */}
          <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
            <div className="md:flex w-full">
              {/* <div className="px-2 py-12">
            <div className="w-100 md:w-60 border-b shadow-sm rounded mb-5 sm:mb-0">
              <nav className="bg-white border-gray-200 rounded">
                <div className="max-w-screen-xl">
                  <Sidebar />
                </div>
              </nav>
            </div>
          </div> */}
              <div className="px-2 md:px-6 md:px-8 w-full">
                {/* <div className="lg:pl-[19.5rem]">{children}</div> */}
                <div className="">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  )
}
