import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types/generated/supabase'
import { cookies } from 'next/headers'

export default function getServerSideSupabaseClient() {
  const supabase = createServerComponentClient<Database, 'copyfuse'>(
    {
      cookies
    },
    {
      options: {
        db: { schema: 'copyfuse' }
      }
    }
  )

  return supabase
}
