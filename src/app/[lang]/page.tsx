import Footer from '@/src/components/home/Footer'
import About from '@/src/components/home/About'
import Main from '@/src/components/home/Main'
import Portfolio from '@/src/components/home/Portfolio'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import { Locale } from '@/i18n-config'
import RevealWithBackground from '@/src/components/utils/RevealWithBackground'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import ContactMeFooter from '@/src/components/home/ContactMeFooter'

export default function Home ({
  params: { lang },
}: {params: {lang: Locale}}) {

  return (
    <div className='h-full w-full '>
      <section className='h-screen w-full max-w-screen-xl m-auto'>
          <Main lang={lang} />
      </section>
      
      <section className='min-h-screen w-full bg-bg flex flex-col'>
        <RevealLeftToRight>
          <ShapeDivider />
        </RevealLeftToRight>

        <div className='flex flex-1 w-full bg-bg_secondary p-2'>
          <div className='max-w-screen-xl mx-auto flex flex-col'>
            <About lang={lang} />
            <Portfolio lang={lang} />
          </div>
        </div>
      </section>

      <ContactMeFooter lang={lang} />
      
    </div>
  )
}
