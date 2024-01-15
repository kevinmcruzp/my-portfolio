import { ReactNode } from "react";

interface TooltipProps {
    children: ReactNode
    text: string
}

export default function Tooltip({ children, text }: TooltipProps) {
    return (
        <div
            className="
                relative
                before:content-[attr(data-tip)]
                before:absolute
                before:px-3 before:py-2
                before:left-1/2 before:-top-3
                before:w-max before:max-w-xs
                before:-translate-x-1/2 before:-translate-y-full
                before:bg-gray-700 before:text-white
                before:rounded-md before:opacity-0
                before:transition-all

                after:absolute
                after:left-1/2 after:-top-3
                after:h-0 after:w-0
                after:-translate-x-1/2 after:border-8
                after:border-t-gray-700
                after:border-l-transparent
                after:border-r-transparent
                after:border-b-transparent
                after:opacity-0
                after:transition-all

                hover:before:opacity-100 hover:after:opacity-100
            "
            data-tip={text}
        >
            {children}
        </div>
    )
}

// 'use client'
// import { ReactNode } from "react";

// interface TooltipProps {
//     children: ReactNode
//     text: string
// }

// export default function Tooltip({ children, text }: TooltipProps) {

//     return (
//         <div className="group relative inline-block">
//             {children}
//             <span className="
//                 invisible group-hover:visible
//                 opacity-0 group-hover:opacity-100
//                 transition
//                 bg-blue-500 text-white
//                 px-3 py-2 rounded-lg
//                 absolute bottom-full mb-2 whitespace-nowrap
//             ">
//                 {text}
//             </span>
//         </div>
//     )
// }