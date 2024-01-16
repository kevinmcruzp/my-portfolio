'use client'

import { usePathname, useRouter } from 'next/navigation'
import Link from "next/link";
import CustomLanguageSelector from "../CustomLanguageSelector";
import SwitchTheme from "../SwitchTheme";
import { useEffect, useRef, useState } from "react";
import LinkItems from './Link';
import { Icons } from '@/src/assets/icons';
import { Locale } from '@/i18n-config';

export type Language = {
    code: 'en-us' | 'pt-br' | 'es-es';
    label: 'English' | 'Português' | 'Español';
}

export default function Header({dictionary, lang} : {dictionary: any, lang: Locale}) {

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
                <Link href={`/${lang}`}>
                  <Icons.Alien size="26px" />
                </Link>
            </div>
            
            <div className="flex gap-6 items-center">
                <nav className="flex gap-4">
                    <LinkItems href={`/${lang}`} text={dictionary.header.home}/>
                    <LinkItems href={`/${lang}/about`} text={dictionary.header.about}/>
                    <LinkItems href={`/${lang}/portfolio`} text={dictionary.header.portfolio}/>
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