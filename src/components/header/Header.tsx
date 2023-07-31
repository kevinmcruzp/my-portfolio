'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import CustomLanguageSelector from "../CustomLanguageSelector";
import SwitchTheme from "../SwitchTheme";
import { useEffect, useRef, useState } from "react";
import LinkItems from './Link';

export type Language = {
    code: 'en-us' | 'pt-br' | 'es-es';
    label: 'English' | 'Português' | 'Español';
}

export default function Header() {

    const languages: Language[] = [
        { code: 'en-us', label: 'English' },
        { code: 'pt-br', label: 'Português' },
        { code: 'es-es', label: 'Español' },
      ];
    
      const [isOpen, setIsOpen] = useState(false);
      const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
      const [currentLanguage, setCurrentLanguage] = useState<string>();
      
      const router = useRouter()
    
      const pathName = usePathname()
    
      useEffect(() => {
        const locale = pathName.split('/')[1]
        const language = languages.find(language => language.code.split('-')[0] === locale)

        setCurrentLanguage(locale)

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
        <header className="flex justify-between max-w-screen-xl m-auto h-[50px] items-center p-2">
            <div className="flex items-center">
                Header
            </div>
            
            <div className="flex gap-6 items-center">
                <nav className="flex gap-4">
                    <LinkItems href={`/${currentLanguage}`} text='home'/>
                    <LinkItems href={`/${currentLanguage}/about`} text='about'/>
                    <LinkItems href={`/${currentLanguage}/portfolio`} text='portfolio'/>
                </nav>

                <div className="inline-flex items-center gap-2">
                    <CustomLanguageSelector 
                        handleLanguageChange={handleLanguageChange} 
                        isOpen={isOpen} 
                        languageSelectorRef={languageSelectorRef} 
                        languages={languages} 
                        selectedLanguage={selectedLanguage} 
                        setIsOpen={setIsOpen} 
                    />
                    <SwitchTheme />
                </div>
            </div>
        </header>
    )
}