import TextField, { TextFieldProps } from '@mui/material/TextField'
import React, { useRef } from 'react'

interface EmailFieldProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  value: string
  showValidationMessage?: boolean
  onChange: (value: string) => void
  onValidityChange?: (valid: boolean) => void
}

const EmailField = (props: EmailFieldProps) => {
  const {
    value,
    showValidationMessage,
    onChange,
    onValidityChange,
    ...fieldProps
  } = props

  const validRef = useRef(isValidEmail(props.value))
  const invalidValue = !!props.value && !validRef.current

  const onEmailChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const value = e.target.value

    validRef.current = isValidEmail(value)
    props.onChange(value)
    props.onValidityChange?.(validRef.current)
  }

  return (
    <TextField
      {...fieldProps}
      value={props.value}
      onChange={onEmailChange}
      error={invalidValue}
      helperText={invalidValue ? 'Please enter a valid email' : ''}
      type='email'
    />
  )
}

function isValidEmail(email: string) {
  return /^[\w\.\+\-]+@[a-zA-Z\d\.\-]+\.[a-zA-Z]{2,}$/.test(email)
}

export default EmailField
