import Link from "next/link";
import CustomLanguageSelector from "./CustomLanguageSelector";
import SwitchTheme from "./SwitchTheme";


export default function Header() {
    return (
        <header className="flex justify-between max-w-screen-xl m-auto h-[50px] items-center">
            <div className="flex items-center">
                Header
            </div>
            
            <div className="flex gap-6 items-center">
                <nav className="flex gap-4">
                    <span>
                        <Link href="/">Home</Link>
                    </span>
                    <span>
                        <Link href="/about">About</Link>
                    </span>
                    <span>
                        <Link href="/portfolio">Portfolio</Link>    
                    </span>
                </nav>

                <div className="inline-flex items-center gap-2">
                    <CustomLanguageSelector />
                    <SwitchTheme />
                    
                </div>
            </div>
        </header>
    )
}