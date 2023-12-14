"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const data = [
  {
    _id: "snow-leopard-expedition/index.mdx",
    title: "Snow Leopard Expedition 11D/10N - 2024",
    url: "/itineraries/snow-leopard-expedition",
    image: {
      filePath: "../public/tours/snow-leopard-Ladakh1.jpg",
      relativeFilePath: "../../public/tours/snow-leopard-Ladakh1.jpg",
      format: "jpeg",
      height: 1600,
      width: 2400,
      aspectRatio: 1.5,
      blurhashDataUrl:
        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAP/xAAeEAACAgAHAAAAAAAAAAAAAAAAAQIDBhESEzEy0f/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQMEUv/aAAwDAQACEQMRAD8Am8RzTsr2oKa66m1z5kABnZm0w1Vhyj//2Q==",
    },
  },
  {
    _id: "9-day-chaddar-trek/index.mdx",
    url: "/itineraries/9-day-chaddar-trek",
    title: "Chadar a frozen river trek 9D/8N - 2024 ",
    image: {
      filePath: "../public/tours/chadar3.png",
      relativeFilePath: "../../public/tours/chadar3.png",
      format: "webp",
      height: 1915,
      width: 2880,
      aspectRatio: 1.5039164490861618,
      blurhashDataUrl:
        "data:image/webp;base64,UklGRmAAAABXRUJQVlA4IFQAAACwAQCdASoIAAgAAkA4JbACdADzd8lQAP7J+1dUBHpFn+9bO9cTyMys6qeuhe6v8viUF2HkbeUvqssvarY/WIXN/shu9D9GWy2hso/hzVRImzFAAAA=",
    },
  },
  {
    _id: "escape-ladakh-on-a-motorcycle-tour/index.mdx",
    title: "Escape to Ladakh on a Motorcycle Tour 8D/7N - 2024",
    url: "/itineraries/escape-ladakh-on-a-motorcycle-tour",
    image: {
      filePath: "../public/tours/motorbikepangong1.png",
      relativeFilePath: "../../public/tours/motorbikepangong1.png",
      format: "jpeg",
      height: 1335,
      width: 2000,
      aspectRatio: 1.4981273408239701,
      blurhashDataUrl:
        "data:image/jpeg;base64,/9j/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wAARCAAIAAgDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAT/xAAeEAABAwQDAAAAAAAAAAAAAAABAAIDBAYSMhEhMf/EABQBAQAAAAAAAAAAAAAAAAAAAAP/xAAYEQACAwAAAAAAAAAAAAAAAAAAAQIDUf/aAAwDAQACEQMRAD8AoZc5hgMNa4zNadZMx15xkNgiIlVktBdUMP/Z",
    },
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      5000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] lg:flex-row shadow-emerald-900">
      {/* TEXT CONTAINER */}
      <div className="flex-1 flex items-center justify-center flex-col gap-4 text-orange-500 font-semibold w-full">
        <h1 className="text-lg text-center uppercase p-4 md:p-10 md:text-3xl xl:text-6xl">
          {data[currentSlide].title}
        </h1>
        <Link href={data[currentSlide].url}>
          <button className="capitalize py-4 px-6 rounded-xl bg-transparent text-dark dark:text-light font-bold border-2 border-solid dark:border-light border-gray hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
            Know More
          </button>
        </Link>
      </div>
      {/* IMAGE CONTAINER */}
      <div className="w-full flex-1 relative shadow-md">
        <Image
          src={data[currentSlide].image.filePath.replace("../public", "")}
          alt={data[currentSlide].title}
          placeholder="blur"
          blurDataURL={data[currentSlide].image.blurhashDataUrl}
          fill
          className="w-full h-full object-center object-cover -z-10"
          sizes="100vw"
          priority
        />
      </div>
    </div>
  );
};

export default Slider;
