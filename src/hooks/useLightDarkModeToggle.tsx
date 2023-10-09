import { darkModeAtom } from '@/atoms/store'
import { useAtom } from 'jotai'
import { useCallback, useEffect, useState } from 'react'
import berryLightTheme from '@/themes/berry/light'
import berryDarkTheme from '@/themes/berry/dark'

const useLightDarkModeToggle = () => {
  const [darkMode] = useAtom(darkModeAtom)
  const [activeTheme, setActiveTheme] = useState(berryLightTheme)

  const updateActiveTheme = useCallback(() => {
    setActiveTheme(darkMode ? berryDarkTheme : berryLightTheme)
  }, [darkMode])

  useEffect(() => {
    updateActiveTheme()
  }, [updateActiveTheme])

  return activeTheme
}

export default useLightDarkModeToggle
