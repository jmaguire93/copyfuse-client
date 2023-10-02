'use client'

import HomeIcon from '@mui/icons-material/HomeRounded'
import DatasetIcon from '@mui/icons-material/Dataset'
import { DrawerProps } from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { sidebarOpenAtom } from '@/atoms/store'
import { useAtomValue } from 'jotai/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import { BORDER_RADIUS, DRAWER_WIDTH } from '../../../constants'

const Drawer = dynamic(() => import('@mui/material/Drawer'), {
  ssr: false
}) as unknown as React.FunctionComponent<DrawerProps>

interface AppDrawerProps {
  children: ReactNode
}

const navItems = [
  {
    name: 'Dashboard',
    icon: <HomeIcon />,
    href: '/app'
  },
  {
    name: 'Activity Overview',
    icon: <DatasetIcon />,
    href: '/app/activity'
  }
]

const AppDrawer = (props: AppDrawerProps) => {
  const theme = useTheme()
  const largerThanMd = useMediaQuery(theme.breakpoints.up('md'))
  const sidebarOpen = useAtomValue(sidebarOpenAtom)
  const pathname = usePathname()

  const borderRadius = Math.round(BORDER_RADIUS / 4)

  return (
    <Drawer
      anchor='left'
      open={sidebarOpen}
      variant={largerThanMd ? 'persistent' : 'temporary'}
      sx={{
        width: sidebarOpen ? DRAWER_WIDTH : 0,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          borderRight: 'none',
          width: DRAWER_WIDTH,
          boxSizing: 'border-box'
        }
      }}>
      {props.children}
      <div className='mx-[1px] overflow-auto'>
        <List>
          {navItems.map(navItem => (
            <Link key={navItem.href} href={navItem.href} passHref>
              <ListItem>
                <ListItemButton
                  selected={pathname === navItem.href}
                  sx={{
                    py: 2,
                    pl: 4,
                    borderRadius
                  }}>
                  <ListItemIcon>{navItem.icon}</ListItemIcon>
                  <ListItemText primary={navItem.name} />
                </ListItemButton>
              </ListItem>
            </Link>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default AppDrawer
