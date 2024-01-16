import { Icons } from '@/src/assets/icons'
import { CardProps } from '@/src/card-data'
import { Variants, motion } from 'framer-motion'
import Image from 'next/image'

const cardItemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.5 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        type: "spring",
        damping: 5,
        stiffness: 70
      }
    }
  };

export default function CardItem({ card, description } : { card: CardProps, description: string }) {

    return (
        <motion.div
            key={card.title}
            variants={cardItemVariants}
            className="flex flex-col justify-between border border-gray-800 rounded overflow-hidden shadow-lg h-fit mx-auto md:mx-0 min-h-full"
        >
            <a
            href={card.href}
            target="_blank"
            className="relative group"
            >
                <div className="aspect-w-4 aspect-h-3">
                    <Image src={card.img} alt={card.alt} className="group-hover:opacity-50 transition-opacity duration-300 object-cover w-full h-full" />
                </div>
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icons.ArrowRight
                        className="transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
                        fill="white"
                        size={40}
                    />
                </div>
            </a>

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.title}</div>
                <p className="text-gray-400 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {card.tags?.map((tag, index) => (
                    <span
                    key={index}    
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                    {tag}
                    </span>
                ))}
            </div>
        </motion.div>
    )
}