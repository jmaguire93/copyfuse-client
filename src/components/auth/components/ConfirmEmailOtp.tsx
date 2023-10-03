import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React, { useEffect, useRef, useState } from 'react'
import { supabase } from '@/utils/getClientSideSupabaseClient'

interface ConfirmEmailOtpProps {
  email: string
}

const ConfirmEmailOtp = (props: ConfirmEmailOtpProps) => {
  const { email } = props
  const [otp, setOtp] = useState<string>('')
  const otpInputRef = useRef<HTMLInputElement | null>(null)
  const [isSigningIn, setIsSigningIn] = useState(false)

  const handleSignIn = async () => {
    setIsSigningIn(true)
    let otp = ''

    if (otpInputRef.current) {
      otp = otpInputRef.current.value
    }

    try {
      if (!otp) return

      const { error } = await supabase.auth.verifyOtp({
        email,
        token: otp,
        type: 'email'
      })

      if (error) {
        throw error
      }
    } catch (err) {
      const error = err as { message: string }
      console.error(error)
    } finally {
      setIsSigningIn(false)
    }
  }

  useEffect(() => {
    setIsSigningIn(false)
  }, [])

  return (
    <>
      <Stack spacing={2}>
        <div className='text-center'>
          <Typography color='secondary' gutterBottom variant='h5'>
            Email Sent!
          </Typography>
          <Typography variant='body2' gutterBottom>
            We sent a confirmation code to <strong>{email}</strong>.
          </Typography>
          <Typography variant='subtitle2'>
            Please enter it below to continue.
          </Typography>
        </div>
        <TextField
          label='Confirmation code'
          color='primary'
          variant='outlined'
          autoComplete='off'
          autoCorrect='off'
          inputRef={otpInputRef}
          onChange={e => setOtp(e.target.value)}
          autoFocus
        />
        <Button
          disabled={!otp || isSigningIn}
          variant='contained'
          color='secondary'
          onClick={handleSignIn}>
          {!isSigningIn ? 'Sign In' : 'Signing In...'}
        </Button>
      </Stack>
    </>
  )
}

export default ConfirmEmailOtp
