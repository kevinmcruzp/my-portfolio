import { Icons } from "@/src/assets/icons";
import * as React from "react";
import RevealWithBackground from "../utils/RevealWithBackground";
import RevealLeftToRight from "../utils/RevealLeftToRight";
import { StaticImageData } from "next/image";
import ImageMotion from "./ImageZom";
import Link from "next/link";

type ProjectProps = {
    title: string;
    description: string;
    pageURL: string;
    sourceCodeURL: string;
    img: StaticImageData;
    imgPosition?: "left" | "right";
}

export default function CardProject(
    {
        title,
        description,
        pageURL,
        sourceCodeURL,
        img,
        imgPosition = "right"
    }: ProjectProps
) {

    return (
        <div className="grid md:grid-cols-2 h-full">
            {imgPosition == 'right' && (<RevealLeftToRight width="w-full"> <ImageMotion  img={img} /> </RevealLeftToRight>)}

            <div className={`flex flex-col justify-center gap-3 ${imgPosition == 'right' ? 'items-end' : 'items-start'}`}>
                    <RevealWithBackground>
                        <span className='text-lg font-semibold'>{title}</span>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <p className={`text-sm font-medium text-slate-600 dark:text-gray-400 max-w-md ${imgPosition == 'right' ? 'text-end' : 'text-start'}`}>
                            {description}
                        </p>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <div className='flex gap-2'>
                            <Link href={pageURL} target="_blank" className='text-primary flex items-center gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90'>
                                <Icons.ArrowUpRight className='w-4 h-4' />
                                Visit
                            </Link>

                            <Link href={sourceCodeURL} target="_blank" className='flex items-center gap-3 px-9 py-2 rounded-lg border-[1px] border-gray-700 text-sm font-medium hover:opacity-90'>
                                <Icons.Github className='w-4 h-4' />
                                Source-Code
                            </Link>  
                        </div>
                    </RevealWithBackground>
            </div>            
            {imgPosition == 'left' && (<RevealLeftToRight width="w-full"> <ImageMotion img={img} imgPosition='left'/> </RevealLeftToRight>)}
        </div>
    )
}