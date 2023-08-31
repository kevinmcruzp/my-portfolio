import Card from "@/src/components/portfolio/Card";
import MoveIt from '@/public/img/Moveit.png'
import Feedback from '@/public/img/Feedback.png'
import Podcastr from '@/public/img/Podcastr.png'
import RedditClone from '@/public/img/RedditClone.png'
import Dashadmin from '@/public/img/Dashadmin.png'
import PortfolioImg from '@/public/img/Portfolio.png'
import MessageImg from '@/public/img/Message.png'
import { getDictionary } from "@/src/get-dictionary";
import { Locale } from "@/i18n-config";



export default async function Portfolio ({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <section className="
            max-w-screen-xl mx-auto p-2
            grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
            xl:gap-8
        ">
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio.podcast.title} description={dictionary.portfolio.podcast.description} img={Podcastr} alt="Podcastr" href="https://podcastr-next-kevinmcruzp.vercel.app/" />
            <Card tags={['ReactJS','Sass']} title={dictionary.portfolio.messages.title} description={dictionary.portfolio.messages.description} img={MessageImg} alt="Message" href="https://dowhile-messages-reactjs.vercel.app/" />  
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio['dash-admin'].title} description={dictionary.portfolio["dash-admin"].description} img={Dashadmin} alt="Dashadmin" href="https://dashadmin-kevinmcruzp.vercel.app/" />
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio["reddit-clone"].title} description={dictionary.portfolio["reddit-clone"].description} img={RedditClone} alt="RedditClone" href="https://reddit-clone-nextjs-firebase-gamma.vercel.app/" />
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio.portfolio.title} description={dictionary.portfolio.portfolio.description} img={PortfolioImg} alt="Portfolio" href="https://kevincruz.vercel.app/" />
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio["move-it"].title} description={dictionary.portfolio["move-it"].description} img={MoveIt} alt="MoveIt" href="https://moveit-kevinmcruzp.vercel.app/" />
            <Card tags={['Nextjs','ChakraUI']} title={dictionary.portfolio.feedback.title} description={dictionary.portfolio.feedback.description} img={MoveIt} alt="MoveIt" href="https://moveit-kevinmcruzp.vercel.app/" />
        </section>
    )
}