import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

const SUPABASE_URL =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!

export default function getServerSideSupabaseClient() {
  const supabase = createServerComponentClient(
    { cookies },
    {
      supabaseUrl: SUPABASE_URL
    }
  )

  return supabase
}
