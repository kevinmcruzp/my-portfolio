'use client'

import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { motion, useDomEvent } from "framer-motion";
import Podcastr from '@/public/img/Podcastr.png'
import Image from "next/image";

const transition = {
    type: "spring",
    damping: 25,
    stiffness: 120
};

export default function ImageZom({imgPosition = 'right'}: {imgPosition?: "left" | "right"}) {
    const [isOpen, setOpen] = useState(false);
    
    useDomEvent(useRef(typeof window !== 'undefined' ? window :  null), "scroll", () => isOpen && setOpen(false));

    // rounded-lg
    //                     ${isOpen ? "h-full object-contain" : "rotate-y-50 object-contain lg:max-w-md"}

    return (
        <div className={`relative cursor-zoom-in hidden md:flex md:justify-end h-72 ${isOpen ? "cursor-zoom-out" : ""}`}>
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
                    src={Podcastr}
                    alt='podcast' 
                    className={`
                        rounded-lg object-contain
                        ${isOpen ? "h-full" : `lg:max-w-md ${imgPosition == 'right' ? 'rotate-y-25' : 'rotate-y--25'}`}
                    `} 
                    onClick={() => setOpen(!isOpen)}
                    width={isOpen ? 0 : 400}
                />
            </motion.div>
        </div>
    )
}