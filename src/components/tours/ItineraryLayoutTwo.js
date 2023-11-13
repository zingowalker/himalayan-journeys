import { format } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ItineraryLayoutTwo = ({ itinerary }) => {
  return (
    <div className="group grid grid-cols-12 gap-4 items-center text-dark dark:text-light">
      <Link
        href={itinerary.url}
        className=" col-span-12 lg:col-span-4 h-full rounded-xl overflow-hidden"
      >
        <Image
          src={itinerary.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={itinerary.image.blurhashDataUrl}
          alt={itinerary.title}
          width={itinerary.image.width}
          height={itinerary.image.height}
          className="aspect-square w-full h-full object-cover object-center"
          sizes="(max-width: 640px) 100vw,(max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="col-span-12 lg:col-span-8 w-full">
        <span className="inline-block w-full uppercase text-orange-500 dark:text-accentDark font-semibold text-xs sm:text-sm">
          {itinerary.tags[0]}
        </span>
        <Link href={itinerary.url} className="inline-block my-1">
          <h2 className="font-semibold capitalize text-base sm:text-lg">
            <span className="cursor-pointer">{itinerary.title}</span>
          </h2>
        </Link>

        <span className="inline-block w-full capitalize text-gray dark:text-light/50 font-semibold  text-xs sm:text-base">
          {/* {format(new Date(itinerary.publishedAt), "MMMM dd, yyyy")} */}
          <Link
            href={itinerary.url}
            className="cursor-pointer border-spacing-2"
          >
            Know more
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ItineraryLayoutTwo;
