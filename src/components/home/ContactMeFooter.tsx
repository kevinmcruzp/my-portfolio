import Image from "next/image";
import profile from '@/public/img/Profile.png'

export default function ContactMeFooter () {
    return (
        <div className="h-full grid grid-cols-2 p-2">
                <div className="flex justify-center items-center gap-3">
                    <div className="h-36 w-36">
                        <Image src={profile} alt="profile" />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <h1 className="text-2xl font-normal">Kevin Cruz</h1>
                        <p className="text-base text-secondary">Software Engineer</p>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:pl-36">
                    <span className="text-5xl font-normal">Get in touch</span>
                    <div className="flex w-full pl-1 gap-10">
                        <div className="flex flex-col">
                            <span className="text-xs text-secondary">EMAIL ME: </span>
                            <span className="text-base text-primary pb-1 border-b-2 border-divider">
                                kevin_mcp@outlook.com
                            </span>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xs text-secondary">CALL ME: </span>
                            <span className="text-base text-primary pb-1 border-b-2 border-divider">
                                +56 9 2184 3543
                            </span>
                        </div>
                    </div>
                </div>
            </div>
    )
}