import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from '../../components/header/Header'
import { ReactNode } from 'react'
import Providers from '../../components/Providers'
import { Locale, i18n } from '../../../i18n-config'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import Footer from '@/src/components/Footer'
import { getDictionary } from '@/src/get-dictionary'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({lang: locale}))
}

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My portfolio',
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode,
  params: { lang: Locale },
}) {

  const dictionary = await getDictionary(params.lang)

  return (
      <html lang={params.lang} className='dark' style={{colorScheme: 'dark'}}>
        <body className={inter.className}>
          <Providers>
            <div className='min-h-screen min-w-full flex flex-col bg-primary text-gray-800 dark:bg-bg dark:text-primary'>
              
              <div className='w-full border-b border-divider'>
                <Header lang={params.lang} dictionary={dictionary} />
              </div>

              {children}

              <Footer dictionary={dictionary} />
              
            </div>
          </Providers>
        </body>
      </html>
  )
}
