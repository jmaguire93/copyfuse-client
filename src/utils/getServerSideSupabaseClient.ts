import { createClient } from '@supabase/supabase-js'
import { COPYFUSE_TOKEN_COOKIE } from '../constants'

const SUPABASE_URL =
  process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL!
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export default function getServerSideSupabaseClient(cookies: {
  get: (name: string) => { value: string } | undefined
}) {
  const token = cookies.get(COPYFUSE_TOKEN_COOKIE)?.value

  return createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    global: {
      headers: {
        Authorization: `Bearer ${token}`
      }
    },
    auth: {
      persistSession: typeof window !== 'undefined' // persist session if running in browser
    }
  })
}
