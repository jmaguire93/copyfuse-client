'use client'

import AccountCircleIcon from '@mui/icons-material/AccountCircleRounded'
import MenuIcon from '@mui/icons-material/MenuRounded'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import Link from 'next/link'
import { useUser } from '@/context/SessionContextProvider'
import { DRAWER_WIDTH } from '@/constants'
import AppIcon from '../AppIcon'
import UserMenu from '@/user/UserMenu'
import NotificationIconButton from '../notification/NotificationIconButton'
import { useAtom } from 'jotai'
import { darkModeAtom, sidebarOpenAtom } from '@/atoms/store'
import DarkModeToggle from './DarkModeToggle'

interface HeaderNavBarProps {
  height: number
}

const HeaderNavBar = (props: HeaderNavBarProps) => {
  const user = useUser()
  const [, setSidebarOpen] = useAtom(sidebarOpenAtom)
  const [darkMode, setDarkMode] = useAtom(darkModeAtom)

  const toggleSidebarOpen = () => {
    setSidebarOpen(prev => !prev)
  }

  return (
    <AppBar
      color='inherit'
      elevation={0}
      position='fixed'
      sx={{
        zIndex: theme => theme.zIndex.drawer + 1
      }}>
      <Toolbar sx={{ height: props.height }} className='@container'>
        <Box sx={{ width: DRAWER_WIDTH - 50 }} className='flex justify-between'>
          <AppIcon className='text-3xl' />
          <IconButton onClick={toggleSidebarOpen}>
            <MenuIcon />
          </IconButton>
        </Box>
        <div className='flex flex-1 items-center justify-end md:gap-3'>
          <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
          <NotificationIconButton />
          {user ? (
            <UserMenu />
          ) : (
            <>
              <div className='hidden sm:block'>
                <Link href='/auth/sign_in' passHref>
                  <Button
                    color='inherit'
                    onClick={() => {}}
                    startIcon={
                      <AccountCircleIcon className='rounded-full border-[1px] border-white' />
                    }
                    name='Sign In'>
                    <span>Sign In</span>
                  </Button>
                </Link>
              </div>
              <div className='text-white sm:hidden'>
                <Tooltip title='Sign In'>
                  <Link href='/auth/sign_in' passHref>
                    <IconButton color='inherit'>
                      <AccountCircleIcon className='rounded-full border-[1px] border-white' />
                    </IconButton>
                  </Link>
                </Tooltip>
              </div>
            </>
          )}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default HeaderNavBar
