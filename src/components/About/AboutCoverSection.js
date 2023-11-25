import Image from "next/image";
import React from "react";
import profile from "../../../public/logo.png";

const AboutCoverSection = () => {
  return (
    <section className="w-full md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="w-full md:w-1/2 h-full border-r-2 border-solid border-dark dark:border-light flex justify-center">
        <Image
          src={profile}
          alt="eco india journeys"
          className="w-4/5  xs:w-3/4 md:w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1180px) 50vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 flex flex-col text-left items-start justify-center px-5 xs:p-10 pb-10 lg:px-16">
        <h2 className="font-bold capitalize text-lg xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          About
        </h2>
        <p className="font-medium mt-4 text-base">
          Eco India Journeys is committed to responsible & eco-tourism through
          all its policies.
        </p>
        <p className="mt-2 font-medium text-base">
          We feel strongly that all our holidays should benefit the local
          communities, protect the environment by minimizing pollution, and
          respect local traditions, religion and heritage.
        </p>
        <p className="mt-2 font-medium text-base">
          So, in our tours, we raise awareness to these topics and also promote
          interactions with local people - we don’t do different things, but do
          the same things differently.
        </p>
        <p className="mt-2 font-medium text-base">
          At Eco India Journeys, we make sure that your vacation dreams are
          specialized according to your plan and budget, and you miss nothing
          whilst in the Himalayas.
        </p>
        <p className="mt-2 font-medium text-base">
          Over 15 years of experience in trekking, mountaineering, cultural, Eco
          and Special interest tours.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
