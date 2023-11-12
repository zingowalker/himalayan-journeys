import Image from "next/image";
import React from "react";
import profile from "../../../public/logo3.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profile}
          alt="himalayan eco journeys"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-4xl xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          Dream
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
          commodi repudiandae, soluta quisquam voluptatem voluptatum sequi
          perspiciatis beatae! Modi cum cupiditate aspernatur soluta
          consectetur, sunt illo, adipisci delectus repellendus rerum porro
          architecto eos? Placeat recusandae aspernatur omnis ipsum voluptate,
          suscipit cum nisi rerum pariatur quos delectus, culpa illum debitis
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
