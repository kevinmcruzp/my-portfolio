import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import projectsCard from '@/public/img/ProjectsCard.png'

export default function Portfolio() {
    return (
        <div className="grid grid-cols-1 grid-rows-6 p-2 md:grid-cols-2">
            <div className="col-span-2 row-span-1 flex justify-center items-center">
                <span className='text-3xl md:text-5xl font-medium'>Projects</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-6 justify-center items-start">
                <span className="text-xl md:text-2xl font-normal">
                    My works
                </span>
                <span className="font-normal text-xs md:text-sm text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolore unde commodi eius dignissimos expedita, amet quae, 
                    cumque non accusamus incidunt possimus nemo optio asperiores,
                    culpa doloribus saepe provident nulla ut.
                </span>
                <div className="w-full flex justify-end">
                    <button className="
                        w-40 md:w-48 flex items-center justify-center gap-4 p-2
                        border-b-[1px] border-divider text-secondary
                    ">
                        <span className="text-sm md:text-base font-normal">PORTFOLIO</span>
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