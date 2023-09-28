'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { useSession, useUser } from '@/context/SessionContextProvider'

export default function AppPage() {
  const sessionContext = useSession()
  const session = sessionContext?.session || null
  const loading = sessionContext?.loading
  const user = useUser()
  const router = useRouter()

  const handleSignOut = function () {
    supabase.auth.signOut()
    router.push('/auth/sign_in')
  }

  return (
    <div className='flex min-h-screen flex-col items-center p-8'>
      {loading ? (
        <div className='mt-8'>loading...</div>
      ) : (
        <>
          <div className='relative mt-8 flex place-items-center'>
            Welcome
            {user ? ' ' + user.email : ', you are currently not signed in.'}
          </div>
          {session ? (
            <button
              onClick={handleSignOut}
              className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
              Sign Out
            </button>
          ) : (
            <Link href='/auth/sign_in' passHref>
              <button
                onClick={handleSignOut}
                className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
                Sign In
              </button>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
