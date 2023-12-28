'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type RevealLeftToRightProps = {
    children: JSX.Element | ReactNode
    width?: '100%' | 'fit-content'
}

export default function RevealLeftToRight({children, width = 'fit-content'}: RevealLeftToRightProps) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }

    }, [isInView])

    return (
        <div ref={ref} className={`relative overflow-hidden ${width}`}>
            <motion.div
                variants={{
                    hidden: {opacity: 0, x: -900},
                    visible: {opacity: 1, x: 0},
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 0.9, delay: 0.25}}
            >
                {children}
            </motion.div>
        </div>
    )
}