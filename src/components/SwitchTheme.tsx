'use client'

import { useEffect, useState } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from "next-themes"
import SwitchLoading from './SwitchLoading';

export default function SwitchTheme () {
    const {resolvedTheme, setTheme} = useTheme()
    const [mounted, setMounted] = useState(false)

    const handleThemeToggle = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
    
    useEffect(() => setMounted(true), [])

    if (!mounted) {
        return (
            <SwitchLoading />
        )
    }

    return (
        <button
            className="flex items-center justify-center h-8 w-16 rounded-full bg-gray-300 dark:bg-gray-800 focus:outline-none"
            onClick={handleThemeToggle}
        >
            {resolvedTheme === 'dark' ? (
                <>
                    <RiSunLine className="text-yellow-500" />
                    <span className="sr-only">Light Mode</span>
                </>
            ) : (
                <>
                    <RiMoonClearLine className="text-gray-600" />
                    <span className="sr-only">Dark Mode</span>
                </>
            )}
        </button>
  );
}