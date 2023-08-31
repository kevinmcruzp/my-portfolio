import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import projectsCard from '@/public/img/ProjectsCard.png'
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";

export default async function Portfolio ( {lang} : {lang: Locale}) {
    console.log(lang)

    const dictionary = await getDictionary(lang)

    return (
        <div className="grid grid-cols-1 grid-rows-6 p-2 md:grid-cols-2">
            <div className="col-span-2 row-span-1 flex justify-center items-center">
                <span className='text-3xl md:text-5xl font-medium'>{dictionary.home[2].project.title}</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-6 justify-center items-start">
                <span className="text-xl md:text-2xl font-normal">
                    {dictionary.home[2].project.subtitle}
                </span>
                <span className="font-normal text-xs md:text-sm text-secondary">
                    {dictionary.home[2].project.description}
                </span>
                <div className="w-full flex justify-end">
                    <button className="
                        w-40 md:w-48 flex items-center justify-center gap-4 p-2
                        border-b-[1px] border-divider text-secondary
                    ">
                        <span className="text-sm md:text-base font-normal">{dictionary.home[2].project.button}</span>
                        <RiArrowRightSLine size={26} />
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