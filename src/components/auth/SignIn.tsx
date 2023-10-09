'use client'

import { useState } from 'react'
import AppIcon from '../AppIcon'
import EmailSignIn from './components/EmailSignIn'
import { useTheme } from '@mui/material/styles'
import ConfirmEmailOtp from './components/ConfirmEmailOtp'
import { useAtom } from 'jotai'
import { darkModeAtom } from '@/atoms/store'
import DarkModeToggle from '../navigation/DarkModeToggle'
import Paper from '@mui/material/Paper'

export default function SignIn() {
  const [email, setEmail] = useState<string>('')
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)
  const theme = useTheme()

  const handleSignIn = async () => {
    setSubmitted(true)
  }

  return (
    <div className='min-h-screen flex items-center justify-center px-4'>
      <div className='absolute top-0 right-0 p-3'>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      <Paper
        style={{
          background: theme.palette.shell.contrastBackground
        }}
        className='p-8 w-[475px]'>
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
