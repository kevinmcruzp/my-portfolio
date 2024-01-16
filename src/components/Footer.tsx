import { Locale } from "@/i18n-config";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";
import Link from "next/link";
import { Icons } from "@/src/assets/icons";
import Image from "next/image";
import instagram from '@/public/img/icon-instagram.svg'
import linkedin from '@/public/img/icon-linkedin.svg'
import whatsapp from '@/public/img/icon-whatsapp.svg'


export default function Footer ({dictionary} : {dictionary: any}) {

    return (
        <div className="h-12 w-full max-w-screen-xl m-auto border-t-[1px] border-divider p-2 flex items-center justify-between mt-10 bottom-0">
            <div className="flex gap-3">
                <span className="text-sm text-gray-500">{dictionary.footer['created-by']}</span>
            </div>

            <div className="flex gap-3">
                <Link target="_blank" href='https://www.linkedin.com/in/kevinmcruzp/'>
                    <Image src={linkedin} alt="linkedin" width={22} height={22} />
                </Link>
                <Link target="_blank" href='https://www.instagram.com/kevin.pizarro.cruz/'>
                    <Image src={instagram} alt="instagram" width={22} height={22} />
                </Link>
                <Link target="_blank" href='https://github.com/KevinMCruzP'>
                    <Icons.Github size={22} />
                </Link>
                <Link target="_blank" href='https://wa.me/56921843543'>
                    <Image src={whatsapp} alt="whatsapp" width={22} height={22} />
                </Link>
            </div>
        </div>
    )
}