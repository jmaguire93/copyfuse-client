import NotificationsIcon from '@mui/icons-material/Notifications'
import Badge from '@mui/material/Badge'
import IconButton from '@mui/material/IconButton'
import React, { useRef } from 'react'

const NotificationIconButton = () => {
  const anchorRef = useRef<HTMLDivElement | null>(null)

  return (
    <div ref={anchorRef}>
      <IconButton
        aria-label='show new notifications'
        color='inherit'
        onClick={() => {}}>
        <Badge badgeContent={0} color='secondary'>
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </div>
  )
}

export default NotificationIconButton
