import Image from "next/image";
import { RiArrowRightSLine } from "react-icons/ri";
import projectsCard from '@/public/img/ProjectsCard.png'

export default function Portfolio() {
    return (
        <div className="grid grid-cols-2 grid-rows-6 p-2 relative">
            <div className="col-span-2 row-span-1 flex justify-center items-center">
                <span className='text-5xl font-medium'>Projects</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-6 justify-center items-start">
                <span className="text-2xl font-normal">
                    My works
                </span>
                <span className="font-normal text-xs text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                    Dolore unde commodi eius dignissimos expedita, amet quae, 
                    cumque non accusamus incidunt possimus nemo optio asperiores,
                    culpa doloribus saepe provident nulla ut.
                </span>
                <div className="w-full flex justify-end">
                    <button className="
                        flex items-center justify-center gap-4 border-b-[1px] border-divider w-48 text-secondary p-2
                    ">
                        <span className="text-base font-normal">PORTFOLIO</span>
                        <RiArrowRightSLine size={26} />
                    </button>
                </div>
            </div>
            <div className="
                row-span-5 w-full h-full flex justify-center items-center 
            ">
                <Image className="rounded-md" src={projectsCard} alt="Projects card" height={300} />
            </div>
        </div>
    )
}