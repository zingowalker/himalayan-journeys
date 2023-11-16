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
      <span className="font-normal dark:font-semibold text-lg md:text-xl hidden">
        Eco India Journeys
      </span>
    </Link>
  );
};

export default Logo;
