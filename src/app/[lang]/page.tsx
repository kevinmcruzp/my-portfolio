import Main from '@/src/components/home/Main'
import ShapeDivider from '@/src/components/home/ShapeDivider'
import { Locale } from '@/i18n-config'
import RevealLeftToRight from '@/src/components/utils/RevealLeftToRight'
import ContactMeFooter from '@/src/components/home/ContactMeFooter'
import { Icons } from '@/src/assets/icons'
import CardProject from '@/src/components/CardProject'
import MoveIt from '@/public/img/Moveit.png'
import Feedback from '@/public/img/Feedback.png'
import Podcastr from '@/public/img/Podcastr.png'
import RedditClone from '@/public/img/RedditClone.png'
import Dashadmin from '@/public/img/Dashadmin.png'
import PortfolioImg from '@/public/img/Portfolio.png'
import MessageImg from '@/public/img/Message.png'
import { getDictionary } from '@/src/get-dictionary'
import RevealBottomToTop from '@/src/components/utils/RevealBottomToTop'
import Link from 'next/link'


export default async function Home ({
  params: { lang },
}: {params: {lang: Locale}}) {

  const dictionary = await getDictionary(lang)

  return (
    <div className='h-full w-full '>
      <RevealLeftToRight width='w-full'>
        <section className='h-screen w-full max-w-screen-xl m-auto'>
            <Main lang={lang} />
        </section>
      </RevealLeftToRight>
      
      <section className='min-h-screen w-full bg-bg flex flex-col'>
        <RevealBottomToTop width='w-full'>
          <ShapeDivider />
        </RevealBottomToTop>

        <div className='flex flex-1 w-full bg-bg_secondary'>

          <div className='w-full max-w-screen-lg mx-auto flex flex-col px-2 py-8 gap-5'>
            <div className='flex justify-between'>
              <span className='text-lg font-medium'>📂 My projects</span>
              <Link href='/about' className='flex text-xs font-semibold items-center text-sky-700 cursor-pointer hover:opacity-90'>
                See all
                <Icons.ArrowRight className='w-4 h-4' />
              </Link>
            </div>

            <CardProject title={dictionary['page-home'].project.podcast.title} description={dictionary['page-home'].project.podcast.description} img={Podcastr} pageURL='https://podcastr-next-kevinmcruzp.vercel.app/' sourceCodeURL='https://github.com/KevinMCruzP/podcastr-next' />
            <CardProject title={dictionary['page-home'].project.reddit.title} description={dictionary['page-home'].project.reddit.description} img={RedditClone} pageURL='https://reddit-clone-nextjs-firebase-gamma.vercel.app/' sourceCodeURL='https://github.com/KevinMCruzP/Reddit_Clone-Nextjs-Firebase' imgPosition='left' />
            <CardProject title={dictionary['page-home'].project.dashadmin.title} description={dictionary['page-home'].project.dashadmin.description} img={Dashadmin} pageURL='https://dashadmin-kevinmcruzp.vercel.app/dashboard' sourceCodeURL='https://github.com/KevinMCruzP/dashadmin' />

          </div>

        </div>
      </section>

      <ContactMeFooter lang={lang} />
      
    </div>
  )
}
