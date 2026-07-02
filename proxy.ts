import { auth } from '@/auth'
import { NextResponse } from 'next/server'

export const proxy = auth(async (request) => {
  const isLoggedIn = !!request.auth
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin')
  const isLoginPage = request.nextUrl.pathname === '/login'

  if (isAdminRoute && !isLoggedIn) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (isLoginPage && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin', request.url))
  }


  if (request.nextUrl.pathname === '/') {
    const websiteId = process.env.NEXT_PUBLIC_UMAMI_ID
    if (websiteId) {
      fetch('https://analytics.orjon.com/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'event',
          payload: {
            website: websiteId,
            url: '/',
            referrer: request.headers.get('referer') ?? '',
            hostname: request.nextUrl.hostname,
            language: request.headers.get('accept-language')?.split(',')[0] ?? '',
          },
        }),
      }).catch(() => {})
    }
    return NextResponse.redirect(new URL(`/code${request.nextUrl.search}`, request.url))
  }

})

export const config = { matcher: ['/', '/admin/:path*', '/login'] }
