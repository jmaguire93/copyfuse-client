import { NextRequest, NextResponse } from 'next/server'
import getServerSideSupabaseClient from './utils/getServerSideSupabaseClient'

// Redirect to sign in if not authenticated
export async function middleware(request: NextRequest) {
  try {
    const supabase = getServerSideSupabaseClient(request.cookies)

    const {
      data: { user }
    } = await supabase.auth.getUser()

    if (user) {
      return
    }
  } catch (err) {
    console.error(err)
  }

  return NextResponse.redirect(new URL('/auth/sign_in', request.url))
}

// Run on all requests
export const config = {
  matcher: '/'
}
