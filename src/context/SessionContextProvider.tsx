'use client'

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback
} from 'react'
import { User, Session } from '@supabase/supabase-js'
import { supabase } from '@/utils/getClientSideSupabaseClient'
import { useRouter } from 'next/navigation'

interface SessionContextValue {
  session: Session | null
}

const Context = createContext<SessionContextValue | null>(null)

interface SessionContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
  accessToken: string | null
}

const SessionContextProvider = (props: SessionContextProviderProps) => {
  const { children, accessToken } = props
  const [session, setSession] = useState<Session | null>(null)
  const router = useRouter()

  const onSessionChange = useCallback(function (
    callback: (session: Session | null) => void
  ) {
    const {
      data: { subscription }
    } = supabase.auth.onAuthStateChange((_event, session) => {
      callback(session || null)
    })

    return { cancel: subscription.unsubscribe }
  },
  [])

  const getSession = useCallback(async function () {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      throw error
    }

    return data.session || null
  }, [])

  useEffect(() => {
    const { cancel } = onSessionChange((session: Session | null) => {
      setSession(session)
      // Refresh page if access token is no longer valid
      if (session?.access_token !== accessToken) {
        router.refresh()
      }
    })

    getSession()
      .then(session => {
        setSession(session)
      })
      .catch(error => {
        console.error('Error fetching session:', error)
      })

    return cancel
  }, [accessToken, getSession, onSessionChange, router])

  const value = { session }

  return <Context.Provider value={value}>{children}</Context.Provider>
}

export const useUser: () => User | null = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useUser must be used within a SessionContextProvider')
  }
  return context.session ? context.session.user : null
}

export const useSession: () => Session | null = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useSession must be used within a SessionContextProvider')
  }

  return context.session
}

export default SessionContextProvider
