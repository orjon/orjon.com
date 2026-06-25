import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const proxy = async (request: NextRequest) => {
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

export const config = { matcher: '/' }
