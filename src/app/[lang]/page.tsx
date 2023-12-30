import Main from '@/src/components/home/Main'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import { Locale } from '@/i18n-config'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import ContactMeFooter from '@/src/components/home/ContactMeFooter'
import { Icons } from '@/src/assets/icons'
import CardProject from '@/src/components/CardProject'


export default function Home ({
  params: { lang },
}: {params: {lang: Locale}}) {


  return (
    <div className='h-full w-full '>
      <RevealLeftToRight width='w-full'>
        <section className='h-screen w-full max-w-screen-xl m-auto'>
            <Main lang={lang} />
        </section>
      </RevealLeftToRight>
      
      <section className='min-h-screen w-full bg-bg flex flex-col'>
        <RevealLeftToRight width='w-full'>
          <ShapeDivider />
        </RevealLeftToRight>

        <div className='flex flex-1 w-full bg-bg_secondary'>

          <div className='w-full max-w-screen-lg mx-auto flex flex-col px-2 py-8 gap-5'>
            <div className='flex justify-between'>
              <span className='text-lg font-medium'>📂 My projects</span>
              <span className='flex text-xs font-semibold items-center text-sky-700 cursor-pointer hover:opacity-90'>
                See all
                <Icons.ArrowRight className='w-4 h-4' />
              </span>
            </div>

            {/* <div className='grid grid-cols-2'>   
              <Image src={Podcastr} alt='podcast' className='rounded-lg max-w-md' />

              <div className='flex flex-col items-end justify-center gap-3'>
                <span className='text-lg font-semibold'>Podcastr</span>

                <p className='text-sm font-medium text-gray-400 text-end max-w-md'>Podcastr is a platform built for podcast broadcasting.aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>

                <div className='flex gap-2'>
                  <button className='flex items-center gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90'>
                    <Icons.ArrowUpRight className='w-4 h-4' />
                    Visit
                  </button>

                  <button className='flex items-center gap-3 px-9 py-2 rounded-lg border-[1px] border-gray-700 text-sm font-medium hover:opacity-90'>
                    <Icons.Github className='w-4 h-4' />
                    Source-Code
                  </button>  
                </div>
              </div>
            </div> */}

            <CardProject />
            <CardProject imgPosition='left' />
            <CardProject />

          </div>

        </div>
      </section>

      <ContactMeFooter lang={lang} />
      
    </div>
  )
}
