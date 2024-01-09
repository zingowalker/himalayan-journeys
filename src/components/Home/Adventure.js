import { sortItineraries } from "../../../src/utils";
import React from "react";
import ItineraryLayoutFour from "../tours/ItineraryLayoutFour";

const Adventure = ({ itineraries }) => {
  const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h3 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl text-dark dark:text-light mb-3">
        Motorcycle Adventure Tours
      </h3>

      <div className="text-dark dark:text-light mb-3">
        <p className="text-base line-clamp-6 sm:text-lg">
          Discover our adrenaline-pumping tours through breathtaking landscapes,
          offering unforgettable experiences for adventure enthusiasts. Explore
          the heights of the Himalayas on two wheels with our expert-guided
          tours.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-16">
        {sortedItineraries.slice(8, 12).map((itinerary, index) => {
          return (
            <article key={index} className="col-span-1 row-span-1 relative">
              <ItineraryLayoutFour itinerary={itinerary} />
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Adventure;
