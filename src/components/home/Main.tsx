import Image from "next/image";
import KevinImg from "@/public/img/Kevin.png";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/src/get-dictionary";
import RevealWithBackground from "../utils/RevealWithBackground";
import RevealLeftToRight from "../utils/RevealLeftToRight";

export default async function Main ( {lang} : {lang: Locale}) {

  const dictionary = await getDictionary(lang)

  const subtitleWords = dictionary.home[1].subtitle.split(' ');
  const lastIndex = subtitleWords.length - 1;

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
          <span
            className="h-[4px] w-[120px] rounded-sm md:h-[8px] md:w-[148px] bg-gradient"
          ></span>

          <div className="max-w-xl">
            <RevealWithBackground>
              <div className="flex font-bold text-3xl md:text-5xl">
                {dictionary.home[1].title}
                <span className="bg-sky-700 rounded-full h-3 w-3 self-end mb-[5px] ml-1"></span>
              </div>
            </RevealWithBackground>
          </div>

          <div className="font-normal text-xl md:text-3xl max-w-xl">
            <RevealWithBackground>
              {subtitleWords.map((word, index) => (
                <span key={index} className={index >= lastIndex - 1 ? 'font-bold text-sky-700' : ''}>
                  {word}{' '}
                </span>
              ))}
            </RevealWithBackground>
          </div>
          
          <div className="max-w-xl">
            <RevealWithBackground>
              <span className="font-normal text-xs text-secondary max-w-sm md:text-sm">
                {dictionary.home[1].description}
              </span>
            </RevealWithBackground>
          </div>
      </div>
    </div>
  );
}