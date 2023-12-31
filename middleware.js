import { NextResponse } from 'next/server'

export const config = {
  matcher: '/',
}

export function middleware(request) {
  const url = request.nextUrl.clone()

  if (url.pathname === '/') {
    return NextResponse.rewrite(new URL('/proxy', request.url))
  }
}
