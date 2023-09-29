import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default function getServerSideSupabaseClient() {
  const supabase = createServerComponentClient({ cookies })

  return supabase
}
