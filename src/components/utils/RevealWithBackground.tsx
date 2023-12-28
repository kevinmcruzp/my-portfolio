'use client'

import { ReactNode, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type RevealWithBackgroundProps = {
    children: JSX.Element | ReactNode
    width?: '100%' | 'fit-content'
}

export default function RevealWithBackground({children, width = 'fit-content'}: RevealWithBackgroundProps) {
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
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial='hidden'
                animate={mainControls}
                transition={{duration: 0.5, delay: 0.25}}
            >
                {children}
            </motion.div>

            <motion.div
                variants={{
                    hidden: { left: 0 },
                    visible: { left: '100%' },
                }}
                initial='hidden'
                animate={slideControls}
                transition={{duration: 0.5, ease: 'easeIn'}}
                className='absolute top-1 bottom-1 left-0 right-0 bg-sky-700 z-20 '
            >
            </motion.div>
        </div>
    )
}