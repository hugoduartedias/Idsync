import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Kyc',
  description: ''
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
  // <html>
  //   <body className={inter.className + ' h-full'}>{children}</body>
  // </html>
}
