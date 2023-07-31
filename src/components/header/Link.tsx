import Link from "next/link";
import { usePathname } from "next/navigation";

type LinkProps = {
    href: string;
    text: string;
}

export default function LinkItems ({ href, text }: LinkProps) {

    const pathName = usePathname()

    return (
        <span className={`${href === pathName && 'border-b-2 border-divider'}`}>
            <Link href={href}>{text}</Link>    
        </span>
    )
}