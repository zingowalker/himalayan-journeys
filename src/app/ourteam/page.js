"use client";

import ImageCard from "../../components/ImageCard";

const teamMembers = [
  {
    src: "./about/jojo.png",
    alt: "image",
    name: "Stanzin Noorbu",
    role: "Director & Founder",
    bio: "Stanzin has been organizing treks and tours for the last 20-25 years in the Himalayas and all over India, Nepal, Sri Lanka, and Bhutan.",
  },
  {
    src: "./about/jessethamchos.png",
    alt: "image",
    name: "Jesse Thamchos",
    role: "Himalayan Tour Director",
    bio: "Jesse is a passionate Trekking and Tour Leader with over a decade of experience in organizing tours and trekkings in Ladakh and around the Himalayas.",
  },
  {
    src: "./about/tsetan.png",
    alt: "image",
    name: "Tsetan Dorje",
    role: "Developer",
    bio: "Tsetan is working with the company from its creation, web developer and content creator, seamlessly blending technology and creativity to craft immersive online experiences for leading travel agencies.",
  },
  {
    src: "./about/fanny.png",
    alt: "image",
    name: "Fanny Planche",
    role: "Associate Partner & Communication",
    bio: "Fanny is a dedicated associate partner crafting seamless journeys, unlocking unique adventures with passion, precision, and personalized expertise.",
  },
];
export default function Ourteam() {
  return (
    <div class="mb-16">
      <div class="container flex justify-center mx-auto pt-16">
        <div>
          <p class="text-gray-500 text-lg text-center dark:text-light font-normal pb-3">
            BUILDING TEAM
          </p>
          <h1 class="xl:text-4xl text-3xl text-center text-gray-800 dark:text-light font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The People Behind the Scenes of Eco India Journeys!
          </h1>
        </div>
      </div>

      <div class="">
        {teamMembers.map((member, index) => (
          <ImageCard key={index} {...member} />
        ))}
      </div>
    </div>
  );
}
