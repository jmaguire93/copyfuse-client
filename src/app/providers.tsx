'use client'

import SessionContextProvider from '@/context/SessionContextProvider'
import { ThemeProvider } from '@mui/material/styles'
import berryTheme from '@/themes/berry'
import CssBaseline from '@mui/material/CssBaseline'
import createEmotionCache from '@/utils/createEmotionCache'
import { CacheProvider } from '@emotion/react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { sidebarOpenAtom } from '@/atoms/store'
import { useTheme } from '@mui/material/styles'
import { useEffect } from 'react'
import { useAtom } from 'jotai/react'

interface ProviderProps {
  children: React.ReactNode | React.ReactNode[]
  accessToken: string | null
}

const Providers = (props: ProviderProps) => {
  const { children, accessToken } = props
  const theme = useTheme()
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'))
  const [, setSidebarOpen] = useAtom(sidebarOpenAtom)

  useEffect(() => {
    if (largerThanMd === false) {
      setSidebarOpen(false)
    }
  }, [largerThanMd, setSidebarOpen])

  const emotionCache = createEmotionCache()

  return (
    <CacheProvider value={emotionCache}>
      <CssBaseline />
      <ThemeProvider theme={berryTheme}>
        <SessionContextProvider accessToken={accessToken}>
          {children}
        </SessionContextProvider>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default Providers
