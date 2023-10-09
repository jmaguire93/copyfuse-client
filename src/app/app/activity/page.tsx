import RecentlyRegisteredUsers from '@/components/users/RecentlyRegisteredUsers'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'

export default async function ActivityPage() {
  return (
    <div className='mb-8'>
      <Paper>
        <div className='p-4'>
          <div className='flex h-full flex-col gap-4'>
            <Typography variant='h6' className='text-xl font-bold'>
              Recently Registered Users
            </Typography>
          </div>
        </div>
      </Paper>
      <RecentlyRegisteredUsers />
    </div>
  )
}
