import MoveIt from '@/public/img/Moveit.png'
import Feedback from '@/public/img/Feedback.png'
import Podcastr from '@/public/img/Podcastr.png'
import RedditClone from '@/public/img/RedditClone.png'
import Dashadmin from '@/public/img/Dashadmin.png'
import PortfolioImg from '@/public/img/Portfolio.png'
import MessageImg from '@/public/img/Message.png'
import { Icons } from "@/src/assets/icons";
import { StaticImageData } from 'next/image'

export type CardProps = {
    key: string,
    img: StaticImageData
    alt: string,
    title: string,
    tags: string[],
    href: string
}

export const cards: CardProps[] = [
  {
    key: 'podcast',
    tags: ['Nextjs','ChakraUI'],
    title: "Podcastr",
    img: Podcastr,
    alt: 'podcastr',
    href: "https://podcastr-next-kevinmcruzp.vercel.app/"
  },
  {
    key: 'messages',
    tags: ['ReactJS','Sass'],
    title: "Messages",
    img: MessageImg,
    alt: 'messages',
    href: "https://dowhile-messages-reactjs.vercel.app/"
  },
  {
    key: 'dash-admin',
    tags: ['Nextjs','ChakraUI'],
    title: "Dashadmin",
    img: Dashadmin,
    alt: 'dashadmin',
    href: "https://dashadmin-kevinmcruzp.vercel.app/"
  },
  {
    key: 'reddit-clone',
    tags: ['Nextjs','ChakraUI'],
    title: "Reddit Clone",
    img: RedditClone,
    alt: 'reddit clone',
    href: "https://reddit-clone-nextjs-firebase-gamma.vercel.app/"
  },
  {
    key: 'portfolio',
    tags: ['Nextjs','ChakraUI'],
    title: "Portfolio",
    img: PortfolioImg,
    alt: 'portfolio',
    href: "https://kevincruz.vercel.app/"
  },
  {
    key: 'move-it',
    tags: ['Nextjs','ChakraUI'],
    title: "MoveIt",
    img: MoveIt,
    alt: 'moveit',
    href: "https://moveit-kevinmcruzp.vercel.app/"
  },
  {
    key: 'feedback',
    tags: ['Nextjs','Tailwind'],
    title: "Feedback",
    img: Feedback,
    alt: 'feedback',
    href: "https://moveit-kevinmcruzp.vercel.app/"
  }
];