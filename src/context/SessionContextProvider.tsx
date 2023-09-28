'use client'

import React, {
  useState,
  useEffect,
  createContext,
  useContext,
  useCallback
} from 'react'
import { User, Session } from '@supabase/supabase-js'
import { COPYFUSE_TOKEN_COOKIE } from '@/constants'
import Cookies from 'js-cookie'
import { supabase } from '@/utils/getClientSideSupabaseClient'

interface SessionContextValue {
  session: Session | null
  loading: boolean
}

const Context = createContext<SessionContextValue | null>(null)

interface SessionContextProviderProps {
  children: React.ReactNode | React.ReactNode[]
}

const SessionContextProvider = (props: SessionContextProviderProps) => {
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const setSessionCookie = useCallback((session: Session | null) => {
    if (session) {
      Cookies.set(COPYFUSE_TOKEN_COOKIE, session.access_token)
    } else {
      Cookies.remove(COPYFUSE_TOKEN_COOKIE)
    }
  }, [])

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
      setSessionCookie(session)
      setLoading(false)
    })

    getSession()
      .then(session => {
        setSession(session)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching session:', error)
        setLoading(false)
      })

    return cancel
  }, [getSession, onSessionChange, setSessionCookie])

  useEffect(() => {
    setSessionCookie(session)
  }, [session, setSessionCookie])

  const value = { session, loading }

  return <Context.Provider value={value}>{props.children}</Context.Provider>
}

export const useUser: () => User | null = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useUser must be used within a SessionContextProvider')
  }
  return context.session ? context.session.user : null
}

export const useSession: () => SessionContextValue | null = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useSession must be used within a SessionContextProvider')
  }

  return context
}

export default SessionContextProvider
