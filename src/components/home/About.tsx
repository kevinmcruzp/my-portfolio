import { RiArrowRightSLine } from "react-icons/ri";

export default function About () {
    return ( 
        <div className="grid grid-cols-2 grid-rows-6 border-b-[1px] border-divider p-2">
            <div className="col-span-2 row-span-1 flex justify-center items-center">
                <span className='text-5xl font-medium'>About me</span>
            </div>
            <div className="row-span-5 w-full h-full flex flex-col gap-6 justify-center items-center">
                <span className="text-2xl font-normal">
                    Im Engineer Computer, web Developer having 1 years of experience.
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
                        <span className="text-base font-normal">LEARN MORE</span>
                        <RiArrowRightSLine size={26} />
                    </button>
                </div>
            </div>
            <div className="
                row-span-5 w-full h-full flex justify-center items-center
            ">
                <button className="p-4 border-[1px] border-primary rounded-xl text-base font-normal">
                    DOWNLOAD MY CV
                </button>
            </div>
        </div>  
    )
}