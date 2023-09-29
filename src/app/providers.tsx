import SessionContextProvider from '@/context/SessionContextProvider'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const supabase = getServerSideSupabaseClient()

  const {
    data: { session }
  } = await supabase.auth.getSession()

  const accessToken = session?.access_token || null

  return (
    <SessionContextProvider accessToken={accessToken}>
      {children}
    </SessionContextProvider>
  )
}

export default Providers
