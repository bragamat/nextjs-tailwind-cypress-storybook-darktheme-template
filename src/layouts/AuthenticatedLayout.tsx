import { Header } from "@/components/Header"

import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export function AuthenticatedLayout({ children }: {
  children: React.ReactNode
}) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Header />
      {children}
    </main >
  )
}
