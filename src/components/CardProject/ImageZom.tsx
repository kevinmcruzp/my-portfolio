'use client'

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useDomEvent } from "framer-motion";
import Podcastr from '@/public/img/Podcastr.png'
import Image, { StaticImageData } from "next/image";

type ImageMotionProps = {
    imgPosition?: "left" | "right";
    img: StaticImageData;
}

const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120
};

export default function ImageMotion({ imgPosition = "right", img }: ImageMotionProps) {
    const [isOpen, setOpen] = useState(false);
    
    useDomEvent(useRef(typeof window !== 'undefined' ? window :  null), "scroll", () => isOpen && setOpen(false));

    return (
        <div className={`relative hidden md:flex md:justify-end h-72`}>
            <motion.div
                animate={{ opacity: isOpen ? 1 : 0 }}
                transition={transition}
                className={`
                    fixed top-0 left-0 right-0 bottom-0 pointer-events-none opacity-0 bg-[rgba(0,0,0,0.9)]
                    ${isOpen ? "pointer-events-auto opacity-100 z-10" : ""}
                `}
                onClick={() => setOpen(false)}
            />

            <motion.div
                layout
                onClick={() => setOpen(!isOpen)}
                transition={transition}
                className={`
                    top-0 left-0 right-0 bottom-0 flex perspective mx-auto
                    ${isOpen ? "fixed z-10 max-w-[70%] m-auto" : ""}
                `}
            >
                <Image
                    src={img}
                    alt='podcast' 
                    className={`
                        rounded-lg object-contain shadow-lg my-auto cursor-zoom-in
                        ${isOpen ? "h-full cursor-zoom-out" : `lg:max-w-md hover:rotate-y-0 hover:scale-105 hover:z-10 hover:transition-all hover:duration-500 ${imgPosition == 'right' ? 'rotate-y-25' : 'rotate-y--25'}`}
                    `} 
                    onClick={() => setOpen(!isOpen)}
                    width={isOpen ? 0 : 400}
                />
            </motion.div>
        </div>
    )
}