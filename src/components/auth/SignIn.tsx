'use client'

import { useState } from 'react'
import { supabase } from '@/utils/getClientSideSupabaseClient'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [otp, setOtp] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSignIn = async () => {
    if (!email) return

    const { error } = await supabase.auth.signInWithOtp({
      email
    })

    if (error) {
      throw error
    }

    setSubmitted(true)
  }

  const handleVerify = async () => {
    if (!otp) return

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: 'email'
    })

    if (error) {
      throw error
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
