import { Locale } from "@/i18n-config";
import { Icons } from "@/src/assets/icons";
import { getDictionary } from "@/src/get-dictionary";
import RevealWithBackground from "../utils/RevealWithBackground";

export default async function About ( {lang} : {lang: Locale}) {

    const dictionary = await getDictionary(lang)

    return ( 
        <div className="flex border-b-[1px] border-divider">
            <div className="w-full h-full flex flex-col gap-4 justify-center items-start">
                <RevealWithBackground>
                    <span className='text-xl md:text-2xl font-bold'>{dictionary.home[2].about.title}</span>
                </RevealWithBackground>

                <RevealWithBackground>
                    <span className="text-base font-medium">
                        {dictionary.home[2].about.subtitle}
                    </span>
                </RevealWithBackground>

                <RevealWithBackground>
                    <span className="font-normal text-xs md:text-sm text-secondary">
                        {dictionary.home[2].about.description}
                    </span>
                </RevealWithBackground>

                <div className="w-full flex justify-end">
                    <RevealWithBackground>
                        <button className="
                            flex items-center justify-center gap-3 text-sky-600
                        ">
                            <span className="text-xs md:text-sm font-medium">{dictionary.home[2].about.button}</span>
                            <Icons.ArrowRight size={20} />
                        </button>
                    </RevealWithBackground>
                </div>
            </div>
            
            <div className="
                w-full h-full justify-center items-center hidden md:flex
            ">
                <RevealWithBackground>
                    <button className="flex gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90">
                        {dictionary.home[2].about.download}    
                        <Icons.Download size={20} />
                    </button>
                </RevealWithBackground>
            </div>
        </div>  
    )
}