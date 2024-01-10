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
    description: string,
    tags: string[],
    href: string
}

export const cards: CardProps[] = [
  {
    key: 'podcast',
    tags: ['Nextjs','ChakraUI'],
    title: "Podcastr",
    description:
      "Podcastr is a platform built for podcast broadcasting. Developed during the Next Level Week # 5 event.",
    img: Podcastr,
    alt: 'podcastr',
    href: "https://podcastr-next-kevinmcruzp.vercel.app/"
  },
  {
    key: 'messages',
    tags: ['ReactJS','Sass'],
    title: "Messages",
    description:
      "A simple chat app made with ReactJS and Firebase. Developed during the DoWhile event.",
    img: MessageImg,
    alt: 'messages',
    href: "https://dowhile-messages-reactjs.vercel.app/"
  },
  {
    key: 'dash-admin',
    tags: ['Nextjs','ChakraUI'],
    title: "Dashadmin",
    description:
      "A dashboard admin app made with Nextjs and ChakraUI. Developed during the Next Level Week # 5 event.",
    img: Dashadmin,
    alt: 'dashadmin',
    href: "https://dashadmin-kevinmcruzp.vercel.app/"
  },
  {
    key: 'reddit-clone',
    tags: ['Nextjs','ChakraUI'],
    title: "Reddit Clone",
    description:
      "A Reddit clone made with Nextjs and Firebase. Developed during the Next Level Week # 5 event.",
    img: RedditClone,
    alt: 'reddit clone',
    href: "https://reddit-clone-nextjs-firebase-gamma.vercel.app/"
  },
  {
    key: 'portfolio',
    tags: ['Nextjs','ChakraUI'],
    title: "Portfolio",
    description:
      "My portfolio made with Nextjs and ChakraUI.",
    img: PortfolioImg,
    alt: 'portfolio',
    href: "https://kevincruz.vercel.app/"
  },
  {
    key: 'move-it',
    tags: ['Nextjs','ChakraUI'],
    title: "MoveIt",
    description:
      "A Pomodoro app made with Nextjs and ChakraUI. Developed during the Next Level Week # 4 event.",
    img: MoveIt,
    alt: 'moveit',
    href: "https://moveit-kevinmcruzp.vercel.app/"
  },
  {
    key: 'feedback',
    tags: ['Nextjs','Tailwind'],
    title: "Feedback",
    description:
      "A feedback app made with Nextjs and Tailwind. Developed during the Next Level Week # 4 event.",
    img: Feedback,
    alt: 'feedback',
    href: "https://moveit-kevinmcruzp.vercel.app/"
  }
];