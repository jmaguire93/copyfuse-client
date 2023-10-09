'use client'

import useRegisteredUsers from '@/hooks/useRegisteredUsers'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import { useTheme } from '@mui/material/styles'
import Paper from '@mui/material/Paper'
import subDays from 'date-fns/subDays'
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone'

export default function RecentlyRegisteredUsers() {
  const { registeredUsers, loading } = useRegisteredUsers()
  const now = new Date()
  const theme = useTheme()

  const countUsersCreatedInPeriod = (days: number) =>
    registeredUsers.filter(
      user => new Date(user.created_at) >= subDays(now, days)
    ).length || 0

  const displayData = [
    {
      title: 'Registered in last 24 Hours',
      count: countUsersCreatedInPeriod(1)
    },
    {
      title: 'Registered in Last 7 days',
      count: countUsersCreatedInPeriod(7)
    },
    {
      title: 'Registered in Last 30 days',
      count: countUsersCreatedInPeriod(30)
    }
  ]

  if (loading) {
    return (
      <div className='text-center'>
        <CircularProgress />
      </div>
    )
  }

  return (
    <div className='mt-6'>
      <dl className='mt-2 grid grid-cols-1 gap-6 sm:grid-cols-3'>
        {displayData.map(item => (
          <Paper
            key={item.title}
            sx={{
              backgroundColor: theme.palette.secondary.main,
              color: theme.palette.secondary.contrastText
            }}
            className={`px-6 flex justify-between items-center overflow-hidden cursor-pointer h-28`}>
            <div className=''>
              <Typography variant='h4'> {item.count}</Typography>
              <Typography variant='body1'>{item.title}</Typography>
            </div>
            <AccountCircleTwoToneIcon color='inherit' fontSize='large' />
          </Paper>
        ))}
      </dl>
    </div>
  )
}
