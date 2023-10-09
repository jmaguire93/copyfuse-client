'use client'

import { useTheme } from '@mui/material/styles'

export default function AuthLayoutComponent({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()
  return (
    <div
      style={{
        background: theme.palette.shell.background
      }}>
      {children}
    </div>
  )
}
