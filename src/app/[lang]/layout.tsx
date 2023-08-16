import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/header/Header'
import { ReactNode, Suspense, useEffect, useState } from 'react'
import Providers from '../../components/Providers'
import { i18n } from '../../../i18n-config'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({lang: locale}))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
  params,
}: {
  children: ReactNode,
  params: { lang: string },
}) {
  
  return (
      <html lang={params.lang} className='dark' style={{colorScheme: 'dark'}}>
        <body className={inter.className}>
          <Providers>
            <div className='min-h-screen min-w-full bg-primary dark:bg-bg dark:text-primary'>
              <div className='w-full border-b border-divider'>
                <Header />
              </div>
              {children}  
            </div>
          </Providers>
        </body>
      </html>
  )
}
