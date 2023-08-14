import { Icons } from "@/src/assets/icons";
import Image, { StaticImageData } from "next/image";

type CardProps = {
    img: StaticImageData
    alt: string,
    title: string,
    description: string,
    tags: string[],
    href: string
}

export default function Card ({ img, title, description, tags, alt, href }: CardProps) {
    return (
        <div className="border border-gray-800 rounded overflow-hidden shadow-lg h-fit mx-auto md:mx-0">
            <a
                href={href}
                target="_blank"
                className="relative group"
            >
                <div className="aspect-w-4 aspect-h-3">
                    <Image src={img} alt={alt} className="group-hover:opacity-50 transition-opacity duration-300 object-cover w-full h-full" />
                </div>
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icons.ArrowRight
                        className="transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
                        fill="white"
                        size={40}
                    />
                </div>
            </a>

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