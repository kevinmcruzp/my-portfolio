import { Locale } from "@/i18n-config";
import { Icons } from "@/src/assets/icons";
import { getDictionary } from "@/src/get-dictionary";

export default async function About ( {lang} : {lang: Locale}) {

    const dictionary = await getDictionary(lang)

    return ( 
        <div className="grid grid-cols-1 grid-rows-6 p-2 md:grid-cols-2 border-b-[1px] border-divider">
            <div className="col-span-2 row-span-1 flex justify-start items-center">
                <span className='text-xl md:text-2xl font-bold'>{dictionary.home[2].about.title}</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-7 justify-center items-start">
                <span className="text-base font-medium">
                    {dictionary.home[2].about.subtitle}
                </span>
                <span className="font-normal text-xs md:text-sm text-secondary">
                    {dictionary.home[2].about.description}
                </span>
                <div className="w-full flex justify-end">
                    <button className="
                        flex items-center justify-center gap-3 text-sky-600
                    ">
                        <span className="text-xs md:text-sm font-medium">{dictionary.home[2].about.button}</span>
                        <Icons.ArrowRight size={20} />
                    </button>
                </div>
            </div>
            
            <div className="
                row-span-5 w-full h-full justify-center items-center hidden md:flex
            ">
                <button className="flex gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90">
                    {dictionary.home[2].about.download}    
                    <Icons.Download size={20} />
                </button>
            </div>
        </div>  
    )
}