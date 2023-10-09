import { useUser } from '@/context/SessionContextProvider'
import { supabase } from '@/utils/getClientSideSupabaseClient'
import { useTheme } from '@emotion/react'
import LogoutIcon from '@mui/icons-material/Logout'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import React, { useState } from 'react'

interface UserMenuProps {
  onSignOut?: () => void
}

const Networks = (props: UserMenuProps) => {
  const theme = useTheme()

  return (
    <div className='p-4 rounded-xl mb-8'>
      <div className='flex h-full flex-col gap-4'>
        <Typography variant='h5' className='text-xl font-bold'>
          Dashboard
        </Typography>
      </div>
    </div>
  )
}

export default Networks
