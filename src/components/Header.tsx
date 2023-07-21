import CustomLanguageSelector from "./CustomLanguageSelector";


export default function Header() {
    return (
        <header className="flex justify-between max-w-screen-xl m-auto h-[50px] items-center">
            <div className="flex items-center">
                Header
            </div>
            
            <div className="flex gap-4">
                <nav className="flex gap-4">
                    <span>
                        <a href="#">Home</a>
                    </span>
                    <span>
                        <a href="#">About</a>
                    </span>
                    <span>
                        <a href="#">Portfolio</a>
                    </span>
                </nav>

                <CustomLanguageSelector />
                
            </div>
        </header>
    )
}