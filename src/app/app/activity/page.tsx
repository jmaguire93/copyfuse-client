import RecentlyRegisteredUsers from '@/components/users/RecentlyRegisteredUsers'

export default async function ActivityPage() {
  return (
    <>
      <div className='mb-8'>
        <div className='bg-white p-4 rounded-xl'>
          <div className='flex h-full flex-col gap-4'>
            <div className='text-xl font-semibold'>
              Recently Registered Users
            </div>
          </div>
        </div>
        <RecentlyRegisteredUsers />
      </div>
    </>
  )
}
