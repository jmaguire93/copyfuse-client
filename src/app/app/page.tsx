import { redirect } from 'next/navigation'
import getServerSideSupabaseClient from '@/utils/getServerSideSupabaseClient'
import { Paper, Typography } from '@mui/material'

export default async function AppPage() {
  const supabase = getServerSideSupabaseClient()
  const { data } = await supabase.auth.getSession()

  if (!data.session) {
    redirect('/auth/sign_in')
  }

  return (
    <Paper>
      <div className='p-4 mb-8'>
        <div className='flex h-full flex-col gap-4'>
          <Typography variant='h6' className='text-xl font-bold'>
            Dashboard
          </Typography>
        </div>
      </div>
    </Paper>
  )
}
