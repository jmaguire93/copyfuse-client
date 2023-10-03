import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Providers from './providers'
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
  const supabase = getServerSideSupabaseClient()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  const accessToken = session?.access_token || null

  return (
    <html lang='en'>
      <head>
        <meta name='description' content='Copyfuse Client App' />
      </head>
      <body className={inter.className}>
        <Providers accessToken={accessToken}>{children}</Providers>
      </body>
    </html>
  )
}
