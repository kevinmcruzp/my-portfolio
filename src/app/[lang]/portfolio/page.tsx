import Card from "@/src/components/portfolio/Card";
import MoveIt from '@/public/img/Moveit.png'
import Feedback from '@/public/img/Feedback.png'
import Podcastr from '@/public/img/Podcastr.png'
import RedditClone from '@/public/img/RedditClone.png'
import Dashadmin from '@/public/img/Dashadmin.png'
import { getDictionary } from "@/src/get-dictionary";
import { Locale } from "@/i18n-config";



export default async function Portfolio ({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <section className='
            h-full w-full max-w-screen-xl m-auto p-2 grid grid-cols-1 gap-y-5 gap-x-2 
            xl:gap-x-0 sm:grid-cols-2 md:grid-cols-3
        '>
           
           <Card tags={['Nextjs','ChakraUI']} title={dictionary.about.title} description={dictionary.about.description} img={Dashadmin} alt="Dashadmin" />
           <Card tags={['Nextjs','ChakraUI']} title={dictionary.about.title} description={dictionary.about.description} img={MoveIt} alt="MoveIt" />
           <Card tags={['Nextjs','Tailwind']} title={dictionary.about.title} description={dictionary.about.description} img={Feedback} alt="Feedback" />
           <Card tags={['Nextjs','ChakraUI']} title={dictionary.about.title} description={dictionary.about.description} img={Podcastr} alt="Podcastr" />
           <Card tags={['Nextjs','ChakraUI']} title={dictionary.about.title} description={dictionary.about.description} img={RedditClone} alt="RedditClone" />
           
        </section>
    )
}