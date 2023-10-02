'use client'

import useActivities from '@/hooks/useActivities'
import { CircularProgress } from '@mui/material'
import Paper from '@mui/material/Paper'
import subDays from 'date-fns/subDays'

export default function Activity() {
  const { registeredUsers, loading } = useActivities()
  const now = new Date()

  const countUsersCreatedInPeriod = (days: number) =>
    registeredUsers.filter(
      user => new Date(user.created_at) >= subDays(now, days)
    ).length || 0

  const displayData = [
    {
      title: 'Last 24 Hours',
      count: countUsersCreatedInPeriod(1)
    },
    {
      title: 'Last 7 days',
      count: countUsersCreatedInPeriod(7)
    },
    {
      title: 'Last 30 days',
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
    <div className='px-4 py-2'>
      <h3 className='text-sm font-semibold leading-6 '>
        Total Registered Users:
      </h3>
      <dl className='mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3'>
        {displayData.map(item => (
          <Paper
            key={item.title}
            elevation={4}
            className='overflow-hidden px-4 py-2 cursor-pointer hover:bg-secondary'>
            <dt className='truncate text-xs font-medium '>{item.title}</dt>
            <dd className='mt-1 text-lg font-semibold tracking-tight sm:text-xl'>
              {item.count}
            </dd>
          </Paper>
        ))}
      </dl>
    </div>
  )
}
