import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import Image from "next/image";
import AvatarKevin from '@/public/img/Avatar.png'
import { Icons } from "@/src/assets/icons";

export default async function About({
    params: { lang },
}: {params: {lang: Locale}}) {

    const dictionary = await getDictionary(lang)

    return (
        <section className='flex flex-grow flex-col md:flex-row w-full max-w-screen-xl mx-auto p-2'>
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
            <div className="flex flex-col justify-center gap-5 md:w-1/2">
                <span className="text-base md:text-lg font-light">My name is Kevin Cruz</span>
                <span className="text-xl md:text-3xl font-normal">
                    I&apos;m Engineer Computer, web Developer <br/> having 1 Years Of Experience
                </span>
                <p className="text-sm md:text-base font-light text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus minima dicta 
                    magnam a fugit deserunt, mollitia ipsa itaque iure sapiente molestiae hic vero 
                    cumque explicabo! Nesciunt adipisci sapiente eligendi accusamus?
                </p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-sm md:text-base font-normal">Full name</span>
                            <span className="text-sm md:text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                </div>
                <div className="flex w-full justify-center md:justify-start gap-3">
                    <Icons.JavaScript color="#EFD81D" size="23px" />

                    <Icons.Typescript color="#2F74C0" size="23px" />

                    <Icons.React color="#61DAFB" size="23px" />

                    <Icons.Nextjs size="23px" />

                    <Icons.Nodejs color="#6EA560" size="23px" />

                    <Icons.Linux size="23px" />

                    <Icons.Git color="#E84E31" size="23px" />

                    <Icons.Html5 color="#F16524" size="23px" />

                    <Icons.Css3 color="#00A2D6" size="23px" />
                </div>
                <button className="w-fit p-3 md:p-4 border-[1px] border-primary rounded-xl text-xs md:text-base font-normal mx-auto">
                    DOWNLOAD MY CV
                </button>
            </div>
        </section>
    )
}