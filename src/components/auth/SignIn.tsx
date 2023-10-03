'use client'

import { useState } from 'react'
import AppIcon from '../AppIcon'
import EmailSignIn from './components/EmailSignIn'
import Paper from '@mui/material/Paper'
import ConfirmEmailOtp from './components/ConfirmEmailOtp'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleSignIn = async () => {
    setSubmitted(true)
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <Paper className='p-8 w-[475px]'>
        <div className='mb-4 flex w-full justify-center'>
          {<AppIcon className='text-[30px]' />}
        </div>
        {submitted ? (
          <ConfirmEmailOtp email={email} />
        ) : (
          <EmailSignIn onEmailChange={setEmail} onSend={handleSignIn} />
        )}
      </Paper>
    </div>
  )
}
