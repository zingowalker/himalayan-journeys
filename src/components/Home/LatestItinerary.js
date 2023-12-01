import { sortItineraries } from "../../../src/utils";
import Link from "next/link";
import React from "react";
import ItineraryLayoutThree from "../tours/ItineraryLayoutThree";

const LatestItinerary = ({ itineraries }) => {
  const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <div className="w-full flex justify-between">
        <h2 className="w-fit inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
          1 Week Tours
        </h2>
        <Link
          href="/categories/all"
          className="inline-block font-medium text-orange-500 dark:text-accentDark text-base md:text-lg"
        >
          view all
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedItineraries.slice(5, 9).map((itinerary, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <ItineraryLayoutThree itinerary={itinerary} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default LatestItinerary;
