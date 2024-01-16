'use client'

import { motion, Variants } from "framer-motion";
import CardItem from "./CardItem";
import { cards } from "@/src/card-data";


const cardSectionTitleVariants: Variants = {
  hidden: {
    opacity: 0
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      delay: 0.2
    }
  }
};

const cardsContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.7,
      staggerChildren: 0.5
    }
  }
};

export default function Card({ dictionary } : {dictionary: any}) {    
    return (
        <div
            className="flex flex-col items-center justify-center h-full"
        >
            {/* Cards section title */}
            <motion.div
                variants={cardSectionTitleVariants}
                initial="hidden"
                whileInView="show"
                className="h-16 w-full flex items-center justify-center"
            >
                <span className="text-center text-2xl font-semibold">
                    My Projects 🚀
                </span>
            </motion.div>

            {/* Cards Container */}
            <motion.div
                variants={cardsContainerVariants}
                className="
                    grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5
                    xl:gap-8
                "
                initial="hidden"
                whileInView="show"
            >
                {cards.map((card) => {
                    return (
                        <CardItem key={card.title} card={card} description={dictionary['page-portfolio'][card.key].description} />
                    );
                })}
            </motion.div>
        </div>
    );
}
