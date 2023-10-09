import AuthLayoutComponent from '@/components/layouts/AuthLayoutComponent'

export default function AuthLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <main className='h-full'>
      <AuthLayoutComponent>{children}</AuthLayoutComponent>
    </main>
  )
}
