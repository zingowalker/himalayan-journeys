"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const data = [
  {
    _id: "snow-leopard-expedition/index.mdx",
    title: "Snow Leopard Expedition 11D/10N",
    tag: "Snow Leopard Expedition",
    url: "/itineraries/snow-leopard-expedition",
    desc: "The Trans-Himalayan region of Ladakh, remains a last wildlife frontier. Amidst its rugged winter landscape, the elusive snow leopard thrives in these high valleys created by the Great Himalaya's folds. Cloaked in both natural beauty and the drama of its harsh environment, the snow leopard reigns as the epitome of wilderness. In this high-altitude cold desert, its survival relies on prey like bharal, ibex, and marmots, alongside other predators such as wolves and foxes.",
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
    tag: "Chadar Trek",
    desc: "In the heart of Ladakh lie enchanting natural wonders, but amidst its magic, the most treasured gem is the Chadar Trek. This expedition weaves a tale of resilience and survival—mastering the art of enduring frigid terrains, engaging with locals, delving into their unique way of life. Imagine traversing one of the world's harshest landscapes, a frozen gorge with cascading waterfalls, where the icy Zanskar trail resembles a surreal Chadar, experience",
    title: "Chadar a frozen river trek 9D/8N",
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
    title: "Ladakh Motorcycle Tour 8D/7N",
    tag: "Ladakh Motorcycle Escape",
    desc: "Escape to Ladakh region in the Indian Himalayas with our Royal Enfield motorcycle tour, featuring the most captivating destinations and scenic routes. On this tour you will visit ancient monasteries, traverse the world's highest passes, venture through the vast Nubra Valley, spend a night by the world's highest salt lake, and immerse yourself in the vibrant Tibetan markets adorning the streets of Leh the heart of Ladakh. For an unparalleled experience of Ladakh, join our fully supported Royal Enfield motorcycle tour and discover the region's finest offerings.",
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

const HomeCover = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full inline-block">
      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div
          className="absolute top-0 left-0 bottom-0 right-0 h-full
            bg-gradient-to-b from-transparent from-0% to-dark/90 z-0"
        />
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
        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          <div className="inline-block py-2 sm:py-3 px-6 sm:px-10 bg-dark text-light rounded-full capitalize font-semibold border-2 border-solid border-light hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
            {data[currentSlide].tag}
          </div>
          <Link href={data[currentSlide].url} className="mt-6">
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl cursor-pointer">
              <span
                className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 
                dark:to-accentDark/50 bg-[length:0px_6px]
                hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
              >
                {data[currentSlide].title}
              </span>
            </h1>
          </Link>
          <p className="line-clamp-2 sm:inline-block mt-4 md:text-lg lg:text-xl font-in md:line-clamp-3">
            {data[currentSlide].desc}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCover;
