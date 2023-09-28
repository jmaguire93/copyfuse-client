import { supabase } from '@/utils/getClientSideSupabaseClient'

export default async function requestOTP(email: string): Promise<void> {
  const { error } = await supabase.functions.invoke('send-otp-email', {
    body: {
      email_address: email
    }
  })

  if (error) {
    console.error('Error signing in:', error.message)
    throw error
  }
}
