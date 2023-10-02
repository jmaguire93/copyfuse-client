import { redirect } from 'next/navigation'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'
import Container from '@mui/material/Container'

export default async function AppPage() {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/auth/sign_in')
  }

  const user = data.session.user

  return (
    <Container className='h-full'>
      <div className='flex h-full flex-col gap-4 pt-4'>
        <div className='text-xl font-bold'>Dashboard</div>
        <div>Welcome, {user.email}</div>
      </div>
    </Container>
  )
}
