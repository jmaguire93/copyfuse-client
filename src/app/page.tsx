import { redirect } from 'next/navigation'

export default async function AppPage() {
  // Redirect to /app as the main landing page
  // TODO: This page needs removing, temp solution is to redirect
  redirect('/app')
}
