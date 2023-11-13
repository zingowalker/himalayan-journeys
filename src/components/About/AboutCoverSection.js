import Image from "next/image";
import React from "react";
import profile from "../../../public/logo.png";

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
        <h2 className="font-bold capitalize text-lg xs:text-5xl sxl:text-6xl  text-center lg:text-left">
          About
        </h2>
        <p className="font-medium mt-4 text-base">
          Eco India Journeys is a recognized and registered under the Department
          of Tourism – Govt. of UT Leh Ladakh, India and is an active member of
          the All Ladakh Tour Operators Association (ALTOA). We at Eco India
          Journeys make sure that your vocation dreams are specialized according
          to your plan that nothing misses while your journeys with us.
        </p>
        <p>
          Eco India Journeys is committed to responsible & eco tourism, through
          its policies and practices, which permeate all aspects of its
          business. We strongly feel that all our holidays should benefit the
          local communities, protect the environment by minimizing pollution,
          and respect local traditions, religion and heritage.
        </p>
        <p>
          Over 15 years of experience in trekking, mountaineering, cultural, Eco
          and Special interest tours.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
