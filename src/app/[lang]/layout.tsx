import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/header/Header'
import { ReactNode } from 'react'
import Providers from '../../components/Providers'
import { Locale, i18n } from '../../../i18n-config'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import Footer from '@/src/components/home/Footer'

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
  params: { lang: Locale },
}) {

  return (
      <html lang={params.lang} className='dark' style={{colorScheme: 'dark'}}>
        <body className={inter.className}>
          <Providers>
            <div className='min-h-screen min-w-full flex flex-col bg-primary dark:bg-bg dark:text-primary'>
              
              <div className='w-full border-b border-divider'>
                <Header />
              </div>

              {children}

              <RevealLeftToRight width='w-full'>
                <Footer lang={params.lang}/>
              </RevealLeftToRight>
              
            </div>
          </Providers>
        </body>
      </html>
  )
}
