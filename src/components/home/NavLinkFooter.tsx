import Link from "next/link";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill, RiWhatsappFill } from "react-icons/ri";

export default function NavLinkFooter () {
    return (
        <div className="h-12 w-full border-t-[1px] border-divider p-2 flex items-center justify-between">
                <div className="flex gap-3">
                    <Link href="/"> Home </Link>
                    <Link href="/about"> About </Link>
                    <Link href="/portfolio"> Portfolio </Link>
                </div>

                <div className="flex gap-3">
                    <Link href='/'>
                        <RiLinkedinBoxFill size={22} fill="#0a66c2" />
                    </Link>
                    <Link href='/'>
                        <RiInstagramFill
                            fill="#F97316"
                            size={22} 
                        />
                    </Link>
                    <Link href='/'>
                        <RiGithubFill fill="#fff" size={22} />
                    </Link>
                    <Link href='/'>
                        <RiWhatsappFill fill="#25d366" size={22} />
                    </Link>
                </div>
            </div>
    )
}