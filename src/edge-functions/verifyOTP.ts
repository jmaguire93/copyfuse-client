import { supabase } from '@/utils/getClientSideSupabaseClient'

export default async function verifyOTP(email: string, otp: string) {
  const { data, error } = await supabase.functions.invoke('verify-otp-email', {
    body: {
      email_address: email,
      one_time_code: otp
    }
  })

  if (error) {
    throw error
  }

  return data
}
