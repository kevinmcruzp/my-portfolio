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
        <section className='h-[calc(100vh-50px)] w-full max-w-screen-xl m-auto p-2 grid grid-cols-2'>
            <div className="col-span-1 flex justify-center items-center">
                <Image
                    src={AvatarKevin}
                    alt="Kevin"
                />
            </div>
            <div className="col-span-1 flex flex-col justify-center gap-5">
                <span className="text-lg font-light">My name is Kevin Cruz</span>
                <span className="text-3xl font-normal">I&apos;m Engineer Computer, web Developer <br/> having 1 Years Of Experience</span>
                <p className="text-base font-light text-secondary">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus minima dicta 
                    magnam a fugit deserunt, mollitia ipsa itaque iure sapiente molestiae hic vero 
                    cumque explicabo! Nesciunt adipisci sapiente eligendi accusamus?
                </p>
                <div className="flex flex-col gap-1">
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                    <div className="flex gap-4">
                            <span className="text-base font-normal">Full name</span>
                            <span className="text-base font-normal text-secondary">Kevin Cruz</span>
                    </div>
                </div>
                <div className="flex gap-3">
                    <Icons.JavaScript color="#EFD81D" size="25px" />

                    <Icons.Typescript color="#2F74C0" size="25px" />

                    <Icons.React color="#61DAFB" size="25px" />

                    <Icons.Nextjs size="25px" />

                    <Icons.Nodejs color="#6EA560" size="25px" />

                    <Icons.Linux size="25px" />

                    <Icons.Git color="#E84E31" size="25px" />

                    <Icons.Html5 color="#F16524" size="25px" />

                    <Icons.Css3 color="#00A2D6" size="25px" />
                </div>
                <button className="w-fit p-4 border-[1px] border-primary rounded-xl text-base font-normal mx-auto">
                    DOWNLOAD MY CV
                </button>
            </div>
        </section>
    )
}