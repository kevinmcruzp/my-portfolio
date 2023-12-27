import Image from "next/image";
import projectsCard from '@/public/img/ProjectsCard.png'
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import { Icons } from "@/src/assets/icons";

export default async function Portfolio ( {lang} : {lang: Locale}) {

    const dictionary = await getDictionary(lang)

    return (
        <div className="grid grid-cols-1 grid-rows-6 p-2 md:grid-cols-2">
            <div className="col-span-2 row-span-1 flex justify-start items-center">
                <span className='text-xl md:text-2xl font-bold'>{dictionary.home[2].project.title}</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-7 justify-center items-start">
                <span className="text-base font-medium">
                    {dictionary.home[2].project.subtitle}
                </span>
                <span className="font-normal text-xs md:text-sm text-secondary">
                    {dictionary.home[2].project.description}
                </span>
                <div className="w-full flex justify-end">
                    <button className="
                        flex items-center justify-center gap-3 text-sky-600
                    ">
                        <span className="text-xs md:text-sm font-medium">{dictionary.home[2].project.button}</span>
                        <Icons.ArrowRight size={26} />
                    </button>
                </div>
            </div>

            <div className="
                row-span-5 w-full h-full justify-center items-center hidden md:flex
            ">
                <Image className="rounded-md" src={projectsCard} alt="Projects card" height={300} />
            </div>
        </div>
    )
}