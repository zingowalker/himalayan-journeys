"use client";
import { sortItineraries } from "../../utils";
// import ItineraryLayoutSix from "../tours/ItineraryLayoutSix";
import Link from "next/link";
import Image from "next/image";

const TopTenTrekkingLadakh = ({ itineraries }) => {
  const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center dark:text-light">
      <div className="w-full inline-block">
        <div>
          <h2 className="text-xl font-bold">Top 10 Trekking in Ladakh</h2>
        </div>
        <div className="">
          <p className="font-light text-sm md:text-2xl text-dark dark:text-light">
            Most popular trekking for travellers from around the world
          </p>
        </div>
      </div>

      <div className="flex space-x-4 py-5 overflow-x-scroll">
        {sortedItineraries.slice(9, 16).map((itinerary, index) => (
          <div key={index} className="space-y-1 shrink-0 cursor-pointer">
            <Image
              src={itinerary.image.filePath.replace("../public", "")}
              placeholder="blur"
              blurDataURL={itinerary.image.blurhashDataUrl}
              alt={itinerary.title}
              width={itinerary.image.width}
              height={itinerary.image.height}
              className="w-80 h-72 object-cover rounded-lg pb-2"
            />

            <Link href={itinerary.url} className="inline-block my-1">
              <span className="uppercase text-orange-500 dark:text-accentDark font-semibold text-xs sm:text-sm">
                {itinerary.tags[0]}
              </span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTenTrekkingLadakh;
