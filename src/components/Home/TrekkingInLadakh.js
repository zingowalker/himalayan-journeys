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
    <section className="overflow-hidden w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center text-dark dark:text-light">
      <div className="w-full inline-block overflow-hidden hide-scroll-bar">
        <h2 className="w-full inline-block font-bold capitalize text-2xl md:text-4xl mb-3">
          Trekking in Ladakh
        </h2>
        <p className="text-base line-clamp-6 sm:text-lg">
          Most popular trekking in Ladakh for travellers from around the world.
        </p>
      </div>

      <article className="flex space-x-4 py-5 overflow-x-scroll mt-10 sm:mt-16 max-w-7xl mx-auto p-8 px-3">
        {trekData.map((item) => (
          <div key={item.id} className="space-y-1 shrink-0 cursor-pointer">
            <Link href={item.url}>
              <img
                key={item.id}
                className="w-64 h-40 object-cover rounded-lg pb-2"
                src={item.src}
                alt={item.title}
              />
              <p className="font-bold dark:text-accentDark">{item.title}</p>
            </Link>
            <p className="">Difficulty Level: {item.grade}</p>
            <p className="font-light text-base line-clamp-6 sm:text-lg">
              Best time: {item.bestTime}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};

export default TrekkingInLadakh;
