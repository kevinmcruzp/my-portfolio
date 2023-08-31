import Image from "next/image";
import KevinImg from "@/public/img/Kevin.png";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";

export default async function Main ( {lang} : {lang: Locale}) {

  const dictionary = await getDictionary(lang)

  return (
    <div className="relative h-full w-full flex justify-center">
      <div className="absolute inset-0 opacity-60 hidden md:flex">
        <Image
          src={KevinImg}
          alt="Kevin"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom right"
        />
      </div>
      <div 
        className="
          absolute inset-0 flex flex-col gap-6 h-auto p-2 justify-center
        ">
          <span className="h-[4px] w-[120px] bg-primary text-primary rounded-sm md:h-[8px] md:w-[148px]"></span>
          <span className="font-normal text-4xl md:text-7xl max-w-2xl">
            {dictionary.home[1].title}
          </span>
          <span className="font-normal text-xs text-secondary max-w-sm md:text-sm">
            {dictionary.home[1].description}
          </span>
      </div>
    </div>
  );
}