'use client'

import SessionContextProvider from '@/context/SessionContextProvider'
import { ThemeProvider } from '@mui/material/styles'
import berryTheme from '@/themes/berry'
import CssBaseline from '@mui/material/CssBaseline'

interface ProviderProps {
  children: React.ReactNode | React.ReactNode[]
  accessToken: string | null
}

const Providers = (props: ProviderProps) => {
  const { children, accessToken } = props

  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={berryTheme}>
        <SessionContextProvider accessToken={accessToken}>
          {children}
        </SessionContextProvider>
      </ThemeProvider>
    </>
  )
}

export default Providers
