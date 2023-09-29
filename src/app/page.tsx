import { redirect } from 'next/navigation'
import SignOut from '@/components/auth/SignOut'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'

export default async function AppPage() {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/auth/sign_in')
  }

  const user = data.session.user

  return (
    <div className='flex min-h-screen flex-col items-center p-8'>
      <>
        <div className='relative mt-8 flex place-items-center'>
          Welcome, {user.email}
        </div>
        <SignOut />
      </>
    </div>
  )
}
