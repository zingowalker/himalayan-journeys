import Image from "next/image";
import Link from "next/link";
import logoImg from "../../../public/logo.png";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
      <div className="w-12 md:w-16  overflow-hidden  md:mr-4 sm:items-center justify-center">
        <Image
          src={logoImg}
          alt="EIJ"
          className="w-full h-auto rounded-md"
          sizes="20vw"
          priority
        />
      </div>
      <p className="font-semibold dark:font-semibold text-sm uppercase">
        <span className="text-[#84cc16]">Eco</span>
        <span className="text-light"> India</span>
        <span className="text-orange-500"> Journeys</span>
      </p>
    </Link>
  );
};

export default Logo;
