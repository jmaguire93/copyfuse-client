import Container from '@mui/material/Container'
import Activity from '@/components/activity/Activity'

export default async function ActivityPage() {
  return (
    <Container className='h-full'>
      <div className='flex h-full flex-col gap-4 pt-4'>
        <div className='text-xl font-bold'>User Activity Overview</div>
        <Activity />
      </div>
    </Container>
  )
}
