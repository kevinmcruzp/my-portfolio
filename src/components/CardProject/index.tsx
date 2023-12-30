import { Icons } from "@/src/assets/icons";
import * as React from "react";
import ImageZom from "./ImageZom";
import RevealWithBackground from "../utils/RevealWithBackground";
import RevealLeftToRight from "../utils/RevealLeftToRight";

export default function CardProject({imgPosition = 'right'}: {imgPosition?: "left" | "right"}) {

    return (
        <div className="grid md:grid-cols-2 h-full">
            {imgPosition == 'right' && (<RevealLeftToRight width="w-full"><ImageZom /></RevealLeftToRight>)}

            <div className={`flex flex-col justify-center gap-3 ${imgPosition == 'right' ? 'items-end' : 'items-start'}`}>
                    <RevealWithBackground>
                        <span className='text-lg font-semibold'>Podcastr</span>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <p className={`text-sm font-medium text-gray-400 max-w-md ${imgPosition == 'right' ? 'text-end' : 'text-start'}`}>Podcastr is a platform built for podcast broadcasting.aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <div className='flex gap-2'>
                            <button className='flex items-center gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90'>
                            <Icons.ArrowUpRight className='w-4 h-4' />
                            Visit
                            </button>

                            <button className='flex items-center gap-3 px-9 py-2 rounded-lg border-[1px] border-gray-700 text-sm font-medium hover:opacity-90'>
                            <Icons.Github className='w-4 h-4' />
                            Source-Code
                            </button>  
                        </div>
                    </RevealWithBackground>
            </div>            

            {imgPosition == 'left' && (<RevealLeftToRight width="w-full"><ImageZom imgPosition='left' /></RevealLeftToRight>)}
            
        </div>
    )
}