"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { homeCoverData } from "@/data/homeCover";

const HomeCover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === homeCoverData.length - 1 ? 0 : prev + 1
        ),
      3000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/70 z-0"
        />
        <Image
          src={homeCoverData[currentSlide].image.filePath.replace(
            "../public",
            ""
          )}
          alt={homeCoverData[currentSlide].title}
          placeholder="blur"
          blurDataURL={homeCoverData[currentSlide].image.blurhashDataUrl}
          fill
          className="w-full h-full object-center object-cover -z-10"
          sizes="100vw"
          priority
        />
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <Link href={homeCoverData[currentSlide].url} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {homeCoverData[currentSlide].title}
              </span>
            </h1>
          </Link>
          <p className="sm:inline-block mt-4 md:text-lg lg:text-xl font-in md:line-clamp-2 text-gray-400 hidden">
            {homeCoverData[currentSlide].desc}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCover;
