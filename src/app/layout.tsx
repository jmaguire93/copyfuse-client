import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
import NavBar from '@/components/navigation/NavBar'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Content Create',
  description: 'A Copyfuse App'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <>
          <NavBar />
          <Providers>{children}</Providers>
        </>
      </body>
    </html>
  )
}
