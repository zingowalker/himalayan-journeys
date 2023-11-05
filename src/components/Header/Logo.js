import Image from "next/image";
import Link from "next/link";
import logoImg from "@/public/logo1.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16 rounded-md overflow-hidden border border-solid border-dark dark:border-gray  mr-2 md:mr-4 sm:items-center justify-center">
        <Image
          src={logoImg}
          alt="eco himalayan journeys"
          className="w-full h-auto rounded-md"
          sizes="15vw"
          priority
        />
      </div>
      <span className="font-normal dark:font-semibold text-lg md:text-xl text-multicolor flex flex-col">
        Himland Journeys
      </span>
    </Link>
  );
};

export default Logo;
