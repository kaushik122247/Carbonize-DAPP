import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is trying to access dashboard routes
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    // Check if user is authenticated by looking for the auth cookie
    const authCookie = request.cookies.get('carbonize_auth');
    
    // If no auth cookie exists, redirect to landing page
    if (!authCookie) {
      const loginUrl = new URL('/', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
    
    // Validate the cookie content
    try {
      const authData = JSON.parse(authCookie.value);
      if (!authData || !authData.isAuthenticated) {
        const loginUrl = new URL('/', request.url);
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
        return NextResponse.redirect(loginUrl);
      }
    } catch (error) {
      // If cookie is malformed, redirect to landing page
      console.error('Invalid auth cookie:', error);
      const loginUrl = new URL('/', request.url);
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all dashboard routes:
     * - /dashboard
     * - /dashboard/...
     */
    '/dashboard/:path*',
  ],
};