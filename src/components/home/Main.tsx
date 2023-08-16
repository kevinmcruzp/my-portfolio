import Image from "next/image";
import KevinImg from "@/public/img/Kevin.png";

export default function Main() {
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
          <span className="font-normal text-4xl md:text-7xl ">
            I&apos;m Kevin, a <br/> Software Engineer
          </span>
          <span className="font-normal text-xs text-secondary w-96 md:text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            dolorum tempora, asperiores nemo numquam ullam similique hic fugiat
            obcaecati molestias laborum iusto inventore ea dicta maxime voluptatum
            a consequuntur modi?
          </span>
      </div>
    </div>
  );
}