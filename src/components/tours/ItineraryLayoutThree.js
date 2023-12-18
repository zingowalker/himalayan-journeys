// import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItineraryLayoutThree = ({ itinerary }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={itinerary.url} className="h-full rounded-xl overflow-hidden">
        <Image
          src={itinerary.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={itinerary.image.blurhashDataUrl}
          alt={itinerary.title}
          width={itinerary.image.width}
          height={itinerary.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4">
        <span className="uppercase dark:text-accentDark font-semibold text-xs sm:text-sm">
          {itinerary.tags[0]}
        </span>
        <Link href={itinerary.url} className="inline-block my-1">
          <h2 className="font-semibold text-base line-clamp-3 sm:text-lg">
            <span className="cursor-pointer">{itinerary.description}</span>
          </h2>
        </Link>

        <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm  sm:text-base">
          {/* {format(new Date(itinerary.publishedAt), "MMMM dd, yyyy")}{" "}
          {itinerary.author} */}
        </span>
      </div>
    </div>
  );
};

export default ItineraryLayoutThree;
