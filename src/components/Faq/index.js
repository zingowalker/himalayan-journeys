"use client";

import Accordion from "./Accordion";
import { useState } from "react";

const Faq = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How does Eco India Journeys work?",
      data: `Select your destination and tell us what kind of experience you're looking for. Our knowledgeable local travel specialist will create a tailor-made trip plan based on your requirements. Once you're satisfied with the plan, you can book your trip securely through our payment system.`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How much does it cost to use Eco India Journeys?",
      data: `The cost of your trip depends on various factors such as destination, duration, activities, and accommodations. Our travel specialists will provide you with a detailed quote based on your preferences.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What if I find cheaper prices elsewhere on the web?",
      data: `We strive to offer competitive prices for our services. If you find a lower price for a similar package elsewhere, please let us know, and we'll do our best to match or beat it.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Are you like a traditional travel agent?",
      data: `While we offer similar services to traditional travel agents, we specialize in eco-friendly and sustainable travel experiences. Our focus is on creating unique and responsible journeys that benefit local communities and the environment.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "Does Eco India Journeys help book international flights?",
      data: `No, but yes we can assist you with booking international flights. Our travel specialists will help you find the best options that suit your preferences and budget.
      `,
      isOpen: false,
    },
    {
      key: 6,
      title:
        "In the event that I am unable to travel, will I lose what I paid for my trip?",
      data: `Our cancellation policy varies depending on the type of trip and the terms of our partners. We highly recommend purchasing travel insurance to protect your investment in case of unforeseen circumstances.
      `,
      isOpen: false,
    },
    {
      key: 7,
      title: "How does payment work? Do I pay for my entire trip at once?",
      data: `Payment terms may vary depending on the type of trip and the time of booking. Usually we ask for 50 % of the payment during tour confirmation and 50 % on arrival. Our travel specialists will provide you with detailed information on payment options and schedules.
      `,
      isOpen: false,
    },
    {
      key: 8,
      title:
        "In case of unforeseen last-minute alterations, what provisions does Eco India Journeys offer? Is travel insurance provided?",
      data: `We understand that travel plans can change unexpectedly. Depending on the circumstances, we will work with you to make necessary alterations to your trip. We recommend purchasing travel insurance to cover any unforeseen changes or cancellations.`,
      isOpen: false,
    },
    {
      key: 9,
      title:
        "I've finalized bookings for my accommodations. Can I utilize Eco India Journeys for the remaining aspects of my trip?",
      data: `Yes, you can still use Eco India Journeys to arrange other aspects of your trip such as transportation, activities, and guides. Our travel specialists will tailor the remaining components to complement your existing bookings.
      `,
      isOpen: false,
    },
    {
      key: 10,
      title: "Which currencies and payment methods are accepted?",
      data: `We accept various currencies and payment methods, including bank transfers and online payment platforms. Our travel specialists will provide you with specific details based on your location and preferences.`,
      isOpen: false,
    },
    {
      key: 11,
      title: "Best Time to Visit Ladakh?",
      data: `The best time to visit Ladakh is from May to September when the weather is favourable, and most of the tourist attractions are accessible. Avoid visiting during the winter months due to extreme cold and heavy snowfall, which may limit travel options.
      `,
      isOpen: false,
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <section className="p-2 md:mt-32 mt-16 max-w-7xl w-auto m-8">
      <h1 className="text-2xl mb-2 mx-auto dark:text-light">FAQ</h1>
      {accordions.map((accordion) => (
        <Accordion
          key={accordion.key}
          title={accordion.title}
          data={accordion.data}
          isOpen={accordion.isOpen}
          toggleAccordion={() => toggleAccordion(accordion.key)}
        />
      ))}
    </section>
  );
};

export default Faq;
