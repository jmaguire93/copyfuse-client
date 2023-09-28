'use client'

import { useState } from 'react'
import { supabase } from '../../../utils/supabase'
import { useRouter } from 'next/navigation'
import requestOTP from '@/edge-functions/requestOTP'
import verifyOTP from '@/edge-functions/verifyOTP'

export default function SignInPage() {
  const [email, setEmail] = useState<string>('')
  const [otp, setOtp] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const router = useRouter()

  const handleSignIn = async () => {
    if (!email) return

    // Call edge-function to request OTP email
    await requestOTP(email)

    setSubmitted(true)
  }

  const handleVerify = async () => {
    if (!otp) return
    // Call the verifyOtp method with the email and OTP
    const { data } = await verifyOTP(email, otp)
    const session = data.session

    // If session exists, set the session to trigger the auth state change
    if (session) {
      const { error } = await supabase.auth.setSession({
        access_token: data.session.access_token,
        refresh_token: data.session.refresh_token
      })

      if (error) {
        throw error
      }

      router.push('/')
    } else {
      // No session, so token was invalid
      throw new Error('Invalid Token')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='bg-white p-8 rounded shadow-md'>
        {submitted ? (
          <>
            <h1 className='text-2xl font-semibold mb-4'>Verify OTP</h1>
            <input
              type='text'
              placeholder='Enter OTP'
              value={otp}
              onChange={e => setOtp(e.target.value)}
              className='w-full px-3 py-2 rounded border text-black'
            />
            <button
              onClick={handleVerify}
              className='w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
              Verify
            </button>
          </>
        ) : (
          <>
            <h1 className='text-2xl font-semibold mb-4'>Sign In</h1>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              className='w-full px-3 py-2 rounded border text-black'
            />
            <button
              onClick={handleSignIn}
              className='w-full mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>
              Sign In
            </button>
          </>
        )}
      </div>
    </div>
  )
}
