import Image from "next/image";
import profile from '@/public/img/Profile.png'
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import RevealWithBackground from "../utils/RevealWithBackground";

export default async function ContactMeFooter ({lang} : {lang: Locale}) {

    const dictionary = await getDictionary(lang)

    return (
        <div className="h-full max-w-screen-xl m-auto grid md:grid-cols-2 p-2 mt-10">
                <div className="flex md:justify-center items-center gap-3">
                    <div className="h-36 w-36">
                        <RevealWithBackground>
                            <Image src={profile} alt="profile" className="rounded-full p-2 border-2 border-sky-800"/>
                        </RevealWithBackground>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-3">
                        <RevealWithBackground>
                            <h1 className="text-xl font-medium">Kevin Cruz</h1>
                        </RevealWithBackground>
                        <RevealWithBackground>
                            <p className="text-base text-secondary">{dictionary["page-home"].footer.profession}</p>
                        </RevealWithBackground>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:pl-36">
                    <RevealWithBackground>
                        <span className="text-xl md:text-2xl font-medium">{dictionary["page-home"].footer["get-in-touch"]}</span>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <div className="flex w-full pl-1 gap-10">
                            <div className="flex flex-col">
                                <span className="text-xs text-secondary">{dictionary["page-home"].footer.email}</span>
                                <span className="text-sm text-primary pb-1 border-b-2 border-divider">
                                    kevin_mcp@outlook.com
                                </span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs text-secondary">{dictionary["page-home"].footer.phone} </span>
                                <span className="text-sm text-primary pb-1 border-b-2 border-divider">
                                    +56 9 2184 3543
                                </span>
                            </div>
                        </div>
                    </RevealWithBackground>
                    
                </div>
            </div>
    )
}