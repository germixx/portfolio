// app/middleware.js (for App Router)
import { NextResponse } from 'next/server';

export function middleware(req) {
  const isMaintenance = process.env.MAINTENANCE_MODE === 'true';
  
  if (isMaintenance) {
    // Redirect to maintenance page
    return NextResponse.redirect(new URL('/maintenance', req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ['/']  // This applies to all routes
};