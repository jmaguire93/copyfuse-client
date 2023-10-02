import { Activities } from '@/types/activities'
import { supabase } from '@/utils/getClientSideSupabaseClient'

import { useEffect, useState } from 'react'

export default function useActivities() {
  const [registeredUsers, setRegisteredUsers] = useState<Activities[] | []>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getMembers = async () => {
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
        console.log(err)
        setLoading(false)
      }
    }

    getMembers()
  }, [])

  return {
    registeredUsers,
    loading
  }
}
