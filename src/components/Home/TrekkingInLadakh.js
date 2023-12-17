"use client";
// import { sortItineraries } from "../../utils";
// import ItineraryLayoutSix from "../tours/ItineraryLayoutSix";
// import Tag2 from "../Elements/Tag2";
// import { slug } from "github-slugger";
import Link from "next/link";
// import Image from "next/image";
// import { GiCampingTent } from "react-icons/gi";
// import { TbTrekking } from "react-icons/tb";
// import { MdNoMeals } from "react-icons/md";
// import { FaHorse } from "react-icons/fa";
// import { LuChefHat } from "react-icons/lu";
import { trekData } from "@/data/trekData";

const TrekkingInLadakh = () => {
  // const sortedItineraries = sortItineraries(itineraries);
  return (
    <section className="w-full  p-6 mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center dark:text-light">
      <div className="w-full inline-block">
        <div className="mb-2">
          <h2 className="font-bold text-2xl md:text-4xl text-dark dark:text-light">
            Trekking in Ladakh
          </h2>
        </div>
        <p className="font-normal text-lg md:text-2xl text-dark dark:text-light">
          Most popular trekking in Ladakh for travellers from around the world.
        </p>
      </div>

      <div className="flex space-x-4 py-5 overflow-x-scroll">
        {/* {sortedItineraries.slice(12, 16).map((itinerary, index) => (
          <article key={index} className="space-y-1 shrink-0 cursor-pointer">
            <Link href={itinerary.url} className="overflow-hidden">
              <Image
                src={itinerary.image.filePath.replace("../public", "")}
                placeholder="blur"
                blurDataURL={itinerary.image.blurhashDataUrl}
                alt={itinerary.title}
                width="120"
                height="100"
                className="w-80 h-72 object-cover rounded-lg pb-2"
              />
            </Link>

            <div className="flex flex-col">
              <Tag2
                link={`/categories/${slug(itinerary.tags[0])}`}
                name={itinerary.tags[0]}
              />
              <div className="flex gap-4 mt-3">
                <GiCampingTent />
                <TbTrekking />
                <MdNoMeals />
                <FaHorse />
                <LuChefHat />
              </div>
            </div>
          </article>
        ))} */}
        {trekData.map((item) => (
          <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
            <Link href={item.url}>
              <img
                key={item.id}
                className="w-64 h-40 object-cover rounded-lg pb-2"
                src={item.src}
                alt=""
              />

              <p className="font-bold">{item.title}</p>
            </Link>
            <p className="">Grade: {item.grade}</p>
            <p className="font-light text-sm">Best time: {item.bestTime}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrekkingInLadakh;
