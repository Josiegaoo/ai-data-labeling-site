import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Check if this is the new "josie-gao" project
  // Vercel will assign a domain like: josie-gao.vercel.app or josie-gao-*.vercel.app
  const isJosieGaoProject = hostname.includes('josie-gao');
  
  // If it's the josie-gao project and user is on root, redirect to portfolio
  if (isJosieGaoProject && request.nextUrl.pathname === '/') {
    return NextResponse.rewrite(new URL('/portfolio', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/',
};

