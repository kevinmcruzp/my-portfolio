import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import { ReactNode, Suspense, useEffect, useState } from 'react'
import Providers from '../components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {

  return (
      <html lang="en" className='dark' style={{colorScheme: 'dark'}}>
        <body className={inter.className}>
          <Providers>
            <div className='w-full h-full dark:bg-bg dark:text-primary'>
              <Header />
              {children}  
            </div>
          </Providers>
        </body>
      </html>
  )
}
