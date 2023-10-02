import SignIn from '@/components/auth/SignIn'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'
import { redirect } from 'next/navigation'

export default async function SignInPage() {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (data?.session) {
    redirect('/app')
  }

  return <SignIn />
}
