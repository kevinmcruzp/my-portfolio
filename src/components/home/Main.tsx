import Image from "next/image";
import KevinImg from "@/public/img/Kevin.png";

export default function Main() {
  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-0 opacity-70">
        <Image
          src={KevinImg}
          alt="Kevin"
          layout="fill"
          objectFit="contain"
          objectPosition="bottom right"
        />
      </div>
      <div className="relative">main</div>
    </div>
  );
}