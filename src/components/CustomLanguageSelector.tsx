'use client'
import { type } from 'os';
import React, { useEffect, useRef, useState } from 'react';
import Flag from 'react-flagkit';
import { usePathname, useRouter } from 'next/navigation'

type Language = {
    code: 'en-us' | 'pt-br' | 'es-es';
    label: 'English' | 'Português' | 'Español';
}

export default function CustomLanguageSelector () {

  const languages: Language[] = [
    { code: 'en-us', label: 'English' },
    { code: 'pt-br', label: 'Português' },
    { code: 'es-es', label: 'Español' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const router = useRouter()

  const pathName = usePathname()

  useEffect(() => {
    const locale = pathName.split('/')[1]
    const language = languages.find(language => language.code.split('-')[0] === locale)
    if (language) setSelectedLanguage(language)
  }, [pathName])


  const redirectedPathName = (locale: string) => {
    if (!pathName) return '/'
    
    const segments = pathName.split('/')

    segments[1] = locale
    return segments.join('/')
  }

  const languageSelectorRef = useRef<HTMLDivElement | null>(null);

  const handleLanguageChange = (language: Language) => {
    setIsOpen(false);
    // Add your language change logic here, for example:
    router.push(redirectedPathName(language.code.split('-')[0]))
  };

  useEffect(() => {    
    const handleOutsideClick = (event: MouseEvent) => {
      if (languageSelectorRef.current && !languageSelectorRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={languageSelectorRef}>
      <div>
        <button
          type="button"
          className="inline-flex w-full items-center"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded="true"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Flag country={selectedLanguage.code.split('-')[1]?.toString().toUpperCase()} size={22} />
          <svg
            className="h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="
              origin-top-right bg-bg_secondary absolute right-0 mt-2 w-40 rounded-md shadow-lg 
              ring-1 ring-black ring-opacity-5
            "
          >
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            
            {languages.map((language) => (
              
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language)}
                className="
                    inline-flex justify-between items-center w-full px-4 py-2 text-sm text-gray-100 text-start border-l-2 border-transparent
                    hover:border-hover
                "
                role="menuitem"
              >
                {language.label}
                <Flag country={language.code.split('-')[1].toString().toUpperCase()} size={22} />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
