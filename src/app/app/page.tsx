import { redirect } from 'next/navigation'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'

export default async function AppPage() {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/auth/sign_in')
  }

  return (
    <div className='bg-white p-4 rounded-xl mb-8'>
      <div className='flex h-full flex-col gap-4'>
        <div className='text-xl font-semibold'>Dashboard</div>
      </div>
    </div>
  )
}
