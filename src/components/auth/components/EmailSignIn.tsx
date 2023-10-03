import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import React, { useCallback, useRef, useState } from 'react'
import EmailField from './form/EmailField'
import Button from '@mui/material/Button'
import { supabase } from '@/utils/getClientSideSupabaseClient'

interface EmailSignInProps {
  onEmailChange: (email: string) => void
  onSend: () => void
}

const EmailSignIn = React.forwardRef<HTMLDivElement, EmailSignInProps>(
  (props, ref) => {
    const { onEmailChange, onSend } = props
    const [loading, setLoading] = useState(false)
    const [emailValid, setEmailValid] = useState(false)
    const emailInputRef = useRef<HTMLInputElement | null>(null)

    const sendEmailLogin = useCallback(async () => {
      let email = ''

      if (emailInputRef.current) {
        email = emailInputRef.current.value
      }

      setLoading(true)

      try {
        if (!email) return

        const { error } = await supabase.auth.signInWithOtp({
          email
        })

        if (error) {
          throw error
        }

        onSend()
      } catch (err) {
        //TODO: Add toast message

        const error = err as { message: string }
        console.error(error)
      } finally {
        setLoading(false)
      }
    }, [onSend])

    return (
      <div ref={ref}>
        <Stack spacing={2}>
          <div className='text-center'>
            <Typography color='secondary' gutterBottom variant='h5'>
              Welcome
            </Typography>
            {/* <div className='mb-2'> */}
            <Typography variant='subtitle2'>
              Enter your email address below and we will send you a code to sign
              in with.
            </Typography>
            {/* </div> */}
          </div>

          <EmailField
            label='Email Address'
            name='email'
            type='email'
            value={emailInputRef.current?.value || ''}
            inputRef={emailInputRef}
            color='primary'
            fullWidth
            autoFocus
            disabled={loading}
            onChange={onEmailChange}
            onValidityChange={setEmailValid}
            required
          />
          <Button
            disabled={loading || !emailValid}
            variant='contained'
            color='secondary'
            onClick={sendEmailLogin}>
            Send Verification Email
          </Button>
        </Stack>
      </div>
    )
  }
)

EmailSignIn.displayName = 'EmailSignIn'

export default EmailSignIn
