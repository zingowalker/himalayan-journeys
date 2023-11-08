import React from "react";
import Tag from "../Elements/Tag";
import Link from "next/link";
import Image from "next/image";
import { slug } from "github-slugger";

const ItineraryLayoutOne = ({ itinerary }) => {
  return (
    <div className="group inline-block overflow-hidden rounded-xl">
      <div
        className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 rounded-xl z-10
            "
      />
      <Image
        src={itinerary.image.filePath.replace("../public", "")}
        placeholder="blur"
        blurDataURL={itinerary.image.blurhashDataUrl}
        alt={itinerary.title}
        width={itinerary.image.width}
        height={itinerary.image.height}
        className="w-full h-full object-center object-cover rounded-xl group-hover:scale-105 transition-all ease duration-300"
        sizes="(max-width: 1180px) 100vw, 50vw"
      />

      <div className="w-full absolute bottom-0 p-4 xs:p-6 sm:p-10 z-20">
        <Tag
          link={`/categories/${slug(itinerary.tags[0])}`}
          name={itinerary.tags[0]}
          className="px-6 text-xs  sm:text-sm py-1 sm:py-2 !border "
        />
        <Link href={itinerary.url} className="mt-6">
          <h2 className="font-bold capitalize text-sm xs:text-base sm:text-xl md:text-2xl text-light mt-2 sm:mt-4">
            <span
              className="dark:from-accentDark/50 dark:to-accentDark/50
                group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 text-lg"
            >
              {itinerary.title}
            </span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryLayoutOne;
