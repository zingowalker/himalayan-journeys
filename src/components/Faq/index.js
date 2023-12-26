"use client";

import Accordion from "./Accordion";
import { useState } from "react";

const Faq = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "How does Eco India Journeys work?",
      data: `Select your destination and then tell us what kind of experience you are looking for. We will connect you with a knowledgeable local travel specialist who will put together a tailor-made trip plan based on your requirements. Once you're 100% happy with the plan, you can book your trip via our secure payment system`,
      isOpen: false,
    },
    {
      key: 2,
      title: "How much does it cost to use Eco India Journeys?",
      data: `Eco India Journeys connects you directly with skilled local travel experts. No charges are applied until you confirm your trip with us. To ensure a secure payment gateway and top-tier customer service, a service fee is included in the overall trip cost. A fraction of this fee is allocated towards our commitment to environmental initiatives.`,
      isOpen: false,
    },
    {
      key: 3,
      title: "What if I find cheaper prices elsewhere on the web?",
      data: `At EIJ, our local experts curate deeply personalized journeys crafted specifically for your individual preferences and travel preferences. While striving to maintain competitive rates, we prioritize crafting top-tier trips by meticulously selecting accommodations, activities, and transportation. Our commitment is to deliver exceptional value, encompassing the expertise of your local specialist and seamless on-the-ground support throughout your travel, ensuring a hassle-free and enriching experience.`,
      isOpen: false,
    },
    {
      key: 4,
      title: "Are you like a traditional travel agent?",
      data: `While cherishing the personal touch integral to outstanding travel agents in the planning and booking process, we transcend the typical 'travel agent' role. Our goal is to merge the finest attributes from both spheres: encompassing the personalized, hands-on service and profound destination expertise emblematic of traditional travel agents, along with cutting-edge messaging tech and advanced trip planning tools.`,
      isOpen: false,
    },
    {
      key: 5,
      title: "Does EIJ help book international flights?",
      data: `At present, our primary focus revolves around enhancing the in-destination experience encompassing accommodations, transportation, and activities. Travelers are kindly requested to arrange their own international flight bookings. Nonetheless, our dedicated specialists remain available to address inquiries and offer guidance regarding preferred airports, optimal flight timings, and other related queries.`,
      isOpen: false,
    },
    {
      key: 6,
      title:
        "In the event that I am unable to travel, will I lose what I paid for my trip?",
      data: `Typically, you have the flexibility to reschedule your trip without incurring extra charges provided you notify us at least two weeks prior to your scheduled departure. There's no obligation to confirm a new travel timeline until you're prepared to embark on your journey again. For further details, please feel free to contact our local specialists`,
      isOpen: false,
    },
    {
      key: 7,
      title: "How does payment work? Do I pay for my entire trip at once?",
      data: `To secure your trip booking, a non-refundable deposit of 30% is necessary upon booking confirmation. The remaining balance is generally due one month before your trip commences, after which the trip becomes fully non-refundable. Should you desire an alternative payment arrangement, feel free to converse with us. For trips scheduled within one month from booking, full non-refundable payment is required at the time of booking to confirm all reservations.`,
      isOpen: false,
    },
    {
      key: 8,
      title:
        "In case of unforeseen last-minute alterations, what provisions does EIJ offer? Is travel insurance provided?",
      data: `Our services do not incorporate travel insurance nonetheless, we strongly advise acquiring third-party travel insurance to safeguard against unforeseen cancellations or alterations beyond your control. While we strive to retrieve payments made to providers or rearrange affected services during unexpected circumstances, travel insurance offers additional coverage in scenarios where recovery is not feasible.
        Should you face travel impossibility, in most instances, you can reschedule your trip at no extra cost by providing a minimum of two weeks' notice before your scheduled departure. You are not required to set new dates until you're prepared to resume your travel plans.
        Typically, deposits, EIJ service fees, and planning charges are non-refundable. If cancellation becomes necessary, we will endeavor to recoup any reclaimable expenses. However, cancellation fees apply according to the date of written notification:
        Over 1 month before departure → Loss of deposit, service fee, and planning fees paid
        Less than 1 month before departure → No refund`,
      isOpen: false,
    },
    {
      key: 9,
      title:
        "I've finalized bookings for my accommodations. Can I utilize EIJ for the remaining aspects of my trip?",
      data: `EIJ specialists specialize in crafting comprehensive itineraries, handling transportation, accommodations, activities, and tours for travelers. Typically, they are unable to assist in forming partial itineraries if travelers have independently arranged specific elements. Coordinating multiple individuals managing different aspects of a trip can lead to a complex planning process!`,
      isOpen: false,
    },
    {
      key: 10,
      title: "Which currencies and payment methods are accepted?",
      data: `Although specializing in arranging trips for travelers worldwide, our company, based in the India, necessitates payments in INR. We will facilitate payment through a seamlessly integrated system soon, accepting major credit cards such as American Express, Visa, MasterCard, and Discover`,
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
