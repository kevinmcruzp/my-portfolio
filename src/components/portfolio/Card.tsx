import Image, { StaticImageData } from "next/image";
import MoveIt from '@/public/img/Moveit.png'

type CardProps = {
    img: StaticImageData
    alt: string,
    title: string,
    description: string,
    tags: string[]
}

export default function Card ({ img, title, description, tags, alt }: CardProps) {
    return (
        <div className="max-w-sm border border-gray-700 rounded overflow-hidden shadow-lg h-fit mx-auto md:mx-0">
                <Image src={img} alt={alt} />

                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {description}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {tags?.map((tag, index) => (
                        <span
                        key={index}    
                        className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                    >
                        {tag}
                     </span>
                    ))}
                </div>
        </div>
    )
}