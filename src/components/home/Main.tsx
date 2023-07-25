import Image from "next/image";
import KevinImg from "@/public/img/Kevin.png";

export default function Main() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 opacity-60">
        <Image
          src={KevinImg}
          alt="Kevin"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom right"
        />
      </div>
      <div className="absolute inset-0 top-64">
        <div className="flex flex-col gap-6 h-auto p-2">
          <span className="h-[8px] w-[148px] bg-primary text-primary rounded-sm"></span>
          <span className="font-normal text-7xl ">
            I&apos;m Kevin, a <br/> Software Engineer
          </span>
          <span className="font-normal text-xs text-secondary w-96">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita,
            dolorum tempora, asperiores nemo numquam ullam similique hic fugiat
            obcaecati molestias laborum iusto inventore ea dicta maxime voluptatum
            a consequuntur modi?
          </span>
        </div>
      </div>
    </div>
  );
}