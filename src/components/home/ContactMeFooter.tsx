import Image from "next/image";
import profile from '@/public/img/Profile.png'
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import RevealWithBackground from "../utils/RevealWithBackground";
import { Icons } from "@/src/assets/icons";

export default function ContactMeFooter ({dictionary} : {dictionary: any}) {

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
                            <p className="text-base text-slate-600 dark:text-secondary">{dictionary["page-home"].footer.profession}</p>
                        </RevealWithBackground>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start gap-5 lg:pl-36">
                    <RevealWithBackground>
                        <span className="text-xl md:text-2xl font-medium">{dictionary["page-home"].footer["get-in-touch"]}</span>
                    </RevealWithBackground>

                    <RevealWithBackground>
                        <div className="flex w-full pl-1 gap-10">
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-slate-600 dark:text-secondary">{dictionary["page-home"].footer.email}</span>
                                <span className="flex text-sm text-gray-700 dark:text-primary pb-1 border-b-2 border-divider">
                                    <Icons.Mail className="w-4 h-4 mr-2" />
                                    kevinmcruzp@outlook.com
                                </span>
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="text-xs font-medium text-slate-600 dark:text-secondary">{dictionary["page-home"].footer.phone} </span>
                                <span className="flex text-sm text-gray-700 dark:text-primary pb-1 border-b-2 border-divider">
                                    <Icons.Phone className="w-4 h-4 mr-2" />
                                    +55 42 9 9837 4313
                                </span>
                            </div>
                        </div>
                    </RevealWithBackground>
                    
                </div>
            </div>
    )
}