import { useUser } from '@/context/SessionContextProvider'
import { supabase } from '@/utils/getClientSideSupabaseClient'
import LogoutIcon from '@mui/icons-material/Logout'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import React, { useState } from 'react'

interface UserMenuProps {
  onSignOut?: () => void
}

const UserMenu = (props: UserMenuProps) => {
  const { onSignOut } = props
  const user = useUser()
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)

  if (!user) return null

  const signOut = async () => {
    supabase.auth.signOut()

    if (onSignOut) {
      onSignOut()
    }
  }

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          minHeight: '42px'
        }}>
        <Tooltip placement='bottom' title={user.email}>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 1 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}>
            <Avatar />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0
            }
          }
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
        <MenuItem onClick={signOut}>
          <ListItemIcon>
            <LogoutIcon fontSize='small' />
          </ListItemIcon>
          Sign Out
        </MenuItem>
      </Menu>
    </>
  )
}

export default UserMenu
