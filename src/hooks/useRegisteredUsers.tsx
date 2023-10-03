import { Activities } from '@/types/activities'
import { supabase } from '@/utils/getClientSideSupabaseClient'
import { useEffect, useState } from 'react'

export default function useRegisteredUsers() {
  const [registeredUsers, setRegisteredUsers] = useState<Activities[] | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getRegisteredUsers = async () => {
      try {
        let { data: usersCreated, error } = await supabase
          .from('activities')
          .select('*')
          .eq('activity_category', 'auth.create')

        if (error) {
          throw error
        }

        setRegisteredUsers(usersCreated as Activities[])
        setLoading(false)
      } catch (err) {
        const error = err as { message: string }
        console.error(error)
        setLoading(false)
      }
    }

    getRegisteredUsers()
  }, [])

  return {
    registeredUsers,
    loading
  }
}
