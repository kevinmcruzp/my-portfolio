'use client'

import { useEffect, useState } from 'react';
import { RiMoonClearLine, RiSunLine } from 'react-icons/ri'

export default function SwitchTheme () {

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        currentTheme ? document.documentElement.setAttribute('class', currentTheme) : document.documentElement.setAttribute('class', 'dark');
        setIsDarkMode(currentTheme === 'dark');
    }, []);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);
        const newTheme = isDarkMode ? 'light' : 'dark';
        document.documentElement.setAttribute('class', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <button
            className="flex items-center justify-center h-8 w-16 rounded-full bg-gray-200 dark:bg-gray-800 focus:outline-none"
            onClick={handleThemeToggle}
        >
            {isDarkMode ? (
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