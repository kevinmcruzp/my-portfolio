import { NextResponse } from 'next/server'
import type {NextRequest } from 'next/server'
 
let locales = ['en', 'pt', 'es']
 
// Get the preferred locale, similar to above or using a library
function getLocale(request: NextRequest) {  

  const acceptLanguage = request.headers.get('Accept-Language')
  if (acceptLanguage) {
    const [locale] = acceptLanguage.split(',')
    
    if (locales.includes(locale.split('-')[0])) {
      return locale.split('-')[0]
    }
  }

  return 'en'
}
 
export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )
  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    return NextResponse.redirect(
      new URL(`${locale}`, request.url)
    )
  }

}
 
export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}