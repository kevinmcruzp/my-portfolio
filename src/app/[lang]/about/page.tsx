import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import Image from "next/image";
import AvatarKevin from '@/public/img/Avatar.png'
import { Icons } from "@/src/assets/icons";
import RevealWithBackground from "@/src/components/utils/RevealWithBackground";
import RevealBottomToTop from "@/src/components/utils/RevealBottomToTop";
import Tooltip from "@/src/components/utils/Tooltip";

export default async function About({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <section className='flex flex-grow flex-col justify-center w-full max-w-screen-xl mx-auto p-2 gap-32'>
            <div className="flex flex-col md:flex-row w-full">
                <div className="flex justify-center items-center md:w-1/2">
                    <div className="h-36 w-36 md:h-96 md:w-96">
                        <Image
                            src={AvatarKevin}
                            alt="Kevin"
                            placeholder="blur"
                            blurDataURL={AvatarKevin.src}
                        />
                    </div>
                </div>

                <div className="flex flex-col justify-center gap-6 md:w-1/2">
                    <div className="flex flex-col justify-center gap-3">
                        <RevealWithBackground>
                            <span>{dictionary.about["pre-title"]}</span>
                        </RevealWithBackground>

                        <RevealWithBackground>
                            <span className="text-xl font-medium">
                                {dictionary.about.title} 🤖
                            </span>
                        </RevealWithBackground>

                        <RevealWithBackground>
                            <p className="text-sm font-light text-secondary">
                                {dictionary.about.description}
                            </p>
                        </RevealWithBackground>
                    </div>

                    <RevealWithBackground width="w-full">
                        <table>
                            <tbody>
                                <tr>
                                    <td className="text-xs text-secondary pr-7">{dictionary.about["personal-information"]["full-name"].toUpperCase()}</td>
                                    <td className="text-sm font-light text-primary">Kevin Cruz</td>
                                </tr>
                                <tr>
                                    <td className="text-xs text-secondary">{dictionary.about["personal-information"]["age"].toUpperCase()}</td>
                                    <td className="text-sm font-light text-primary">25/02/1996</td>
                                </tr>
                                <tr>
                                    <td className="text-xs text-secondary">{dictionary.about["personal-information"]["address"].toUpperCase()}</td>
                                    <td className="text-sm font-light text-primary">La Serena, Coquimbo, Chile</td>
                                </tr>
                                <tr>
                                    <td className="text-xs text-secondary">{dictionary.about["personal-information"]["email"].toUpperCase()}</td>
                                    <td className="text-sm font-light text-primary">kevin_mcp@outlook.com</td>
                                </tr>
                            </tbody>
                        </table>
                    </RevealWithBackground>
                    
                    <div className="w-full flex items-center justify-end">
                        <RevealWithBackground>
                            <button className="flex items-center gap-3 px-9 py-2 bg-sky-800 rounded-lg text-sm font-medium hover:opacity-90">
                                {dictionary.home[2].about.download}    
                                <Icons.Download size={20} />
                            </button>
                        </RevealWithBackground>
                    </div>
                </div>
            </div>

            <RevealBottomToTop width="w-full">
                <div className="flex w-full justify-center gap-10 h-auto">
                        <Tooltip text="JavaScript">
                            <Icons.JavaScript color="#EFD81D" size="26px" />
                        </Tooltip>

                        <Tooltip text="TypeScript">
                            <Icons.Typescript color="#2F74C0" size="26px" />
                        </Tooltip>

                        <Tooltip text="ReactJS">
                            <Icons.React color="#61DAFB" size="26px" />
                        </Tooltip>

                        <Tooltip text="NextJS">
                            <Icons.Nextjs size="26px" />
                        </Tooltip>

                        <Tooltip text="NodeJS">
                            <Icons.Nodejs color="#6EA560" size="26px" />
                        </Tooltip>

                        <Tooltip text="Linux">
                            <Icons.Linux size="26px" />
                        </Tooltip>

                        <Tooltip text="Git">
                            <Icons.Git color="#E84E31" size="26px" />
                        </Tooltip>

                        <Tooltip text="Html5">
                            <Icons.Html5 color="#F16524" size="26px" />
                        </Tooltip>

                        <Tooltip text="Css3">
                            <Icons.Css3 color="#00A2D6" size="26px" />
                        </Tooltip>
                </div>
            </RevealBottomToTop>
            
        </section>
    )
}