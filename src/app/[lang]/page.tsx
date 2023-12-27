import Footer from '@/src/components/home/Footer'
import About from '@/src/components/home/About'
import Main from '@/src/components/home/Main'
import Portfolio from '@/src/components/home/Portfolio'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import { Locale } from '@/i18n-config'

export default function Home ({
  params: { lang },
}: {params: {lang: Locale}}) {

  return (
    <div className='h-full w-full '>
      <section className='h-screen w-full max-w-screen-xl m-auto'>
        <Main lang={lang} />
      </section>
      
      <section className='min-h-screen w-full bg-bg flex flex-col'>
          <ShapeDivider />

          <div className='flex flex-1 w-full bg-bg_secondary'>
              <div className='max-w-screen-xl m-auto h-full w-full grid grid-rows-2'>
                <About lang={lang} />
                <Portfolio lang={lang} />
              </div>
          </div>
      </section>
      <footer className='h-[534px] w-full max-w-screen-xl m-auto'>
        <Footer lang={lang} />
      </footer>
    </div>
  )
}
