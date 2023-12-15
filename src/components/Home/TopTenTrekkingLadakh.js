"use client";
import { sortItineraries } from "../../utils";
// import ItineraryLayoutSix from "../tours/ItineraryLayoutSix";
import Link from "next/link";
import Image from "next/image";

const TopTenTrekkingLadakh = ({ itineraries }) => {
  const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full p-6 mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center dark:text-light">
      <div className="w-full inline-block">
        <div>
          <h2 className="text-xl font-bold">Top 10 Trekking in Ladakh</h2>
        </div>
        <div className="">
          <p className="font-normal text-sm md:text-2xl text-dark dark:text-light">
            Most popular trekking in Ladakh for travellers from around the
            world.
          </p>
        </div>
      </div>

      <div className="flex space-x-6 py-4 overflow-x-scroll">
        {sortedItineraries.slice(9, 16).map((itinerary, index) => (
          <div key={index} className="space-y-1 shrink-0 cursor-pointer">
            <Link href={itinerary.url} className="overflow-hidden">
              <Image
                src={itinerary.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={itinerary.image.blurhashDataUrl}
                alt={itinerary.title}
                width={itinerary.image.width}
                height={itinerary.image.height}
                className="w-80 h-72 object-cover rounded-lg pb-2"
              />
            </Link>

            <div className="flex flex-col w-full mt-4">
              <span className="uppercase text-orange-500 dark:text-accentDark font-semibold text-xs sm:text-sm">
                {/* {itinerary.tags[0]} */}
                {itinerary.title}
              </span>
              {/* <Link href={itinerary.url} className="inline-block my-1">
                <h2 className="font-light text-base line-clamp-2">
                  <span className="cursor-pointer">
                    {itinerary.description}
                  </span>
                </h2>
              </Link> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopTenTrekkingLadakh;
