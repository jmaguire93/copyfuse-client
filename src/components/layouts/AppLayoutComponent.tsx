'use client'

import { useTheme } from '@mui/material/styles'
import { BORDER_RADIUS } from '../../constants'

export default function AppLayoutComponent({
  children
}: {
  children: React.ReactNode
}) {
  const theme = useTheme()
  return (
    <div
      style={{
        borderTopLeftRadius: BORDER_RADIUS,
        borderTopRightRadius: BORDER_RADIUS,
        background: theme.palette.content.background
      }}
      className='h-full w-full p-6'>
      {children}
    </div>
  )
}
