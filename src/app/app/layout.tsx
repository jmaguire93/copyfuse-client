import { redirect } from 'next/navigation'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'
import HeaderNavBar from '@/components/navigation/HeaderNavBar'
import { APP_BAR_HEIGHT } from '../../constants'
import Toolbar from '@mui/material/Toolbar'
import AppDrawer from '@/components/navigation/AppDrawer'
import AppLayoutComponent from '@/components/layouts/AppLayoutComponent'

export default async function AppLayout({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/auth/sign_in')
  }

  const emptyToolbar = <Toolbar sx={{ height: APP_BAR_HEIGHT }} />

  return (
    <div className='flex min-h-screen'>
      <HeaderNavBar height={APP_BAR_HEIGHT} />
      <AppDrawer>{emptyToolbar}</AppDrawer>
      <main className='flex grow flex-col overflow-hidden px-2'>
        {emptyToolbar}
        <AppLayoutComponent>{children}</AppLayoutComponent>
      </main>
    </div>
  )
}
