import Image from "next/image";
import projectsCard from '@/public/img/ProjectsCard.png'
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import { Icons } from "@/src/assets/icons";
import RevealWithBackground from "../utils/RevealWithBackground";

export default async function Portfolio ( {lang} : {lang: Locale}) {

    const dictionary = await getDictionary(lang)

    return (
        <div className="flex">
            <div className="w-full h-full flex flex-col gap-4 justify-center items-start">
                <RevealWithBackground>
                    <span className='text-xl md:text-2xl font-bold'>{dictionary.home[2].project.title}</span>
                </RevealWithBackground>

                <RevealWithBackground>
                    <span className="text-base font-medium">
                        {dictionary.home[2].project.subtitle}
                    </span>
                </RevealWithBackground>

                <RevealWithBackground>
                    <span className="font-normal text-xs md:text-sm text-secondary">
                        {dictionary.home[2].project.description}
                    </span>
                </RevealWithBackground>

                <div className="w-full flex justify-end">
                    <RevealWithBackground>
                        <button className="
                            flex items-center justify-center gap-3 text-sky-600
                        ">
                            <span className="text-xs md:text-sm font-medium">{dictionary.home[2].project.button}</span>
                            <Icons.ArrowRight size={26} />
                        </button>
                    </RevealWithBackground>
                </div>
            </div>

            <div className="
                w-full h-full justify-center items-center hidden md:flex
            ">
                <RevealWithBackground>
                    <Image className="rounded-md" src={projectsCard} alt="Projects card" height={300} />
                </RevealWithBackground>
            </div>
        </div>
    )
}