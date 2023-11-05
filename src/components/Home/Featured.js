import { sortItineraries } from "@/src/utils";
import React from "react";
import ItineraryLayoutOne from "../tours/ItineraryLayoutOne";
import ItineraryLayoutTwo from "../tours/ItineraryLayoutTwo";

const Featured = ({ itineraries }) => {
  const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full mt-16 sm:mt-24  md:mt-32 px-5 sm:px-10 md:px-24  sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light">
        Trending tours
      </h2>

      <div className="grid grid-cols-2 grid-rows-2 gap-6  mt-10 sm:mt-16">
        <article className=" col-span-2  sxl:col-span-1 row-span-2 relative">
          <ItineraryLayoutOne itinerary={sortedItineraries[0]} />
        </article>
        <article className=" col-span-2 sm:col-span-1 row-span-1 relative">
          <ItineraryLayoutTwo itinerary={sortedItineraries[1]} />
        </article>
        <article className="col-span-2 sm:col-span-1 row-span-1 relative">
          <ItineraryLayoutTwo itinerary={sortedItineraries[2]} />
        </article>
      </div>
    </section>
  );
};

export default Featured;