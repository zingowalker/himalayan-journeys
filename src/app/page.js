export const metadata = {
  title: "Eco India Journeys: India and Himalayas Specialists",
  description: `Registered under UT Ladakh, India`,
};

import { allItineraries } from "contentlayer/generated";
import HomeCover from "../components/Home/HomeCover";
import Featured from "../components/Home/Featured";
import LatestItinerary from "../components/Home/LatestItinerary";
import Adventure from "../components/Home/Adventure";
import Trekking from "../components/Home/Trekking";

export default function Home() {
  // console.log(allItineraries);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover itineraries={allItineraries} />
      <Featured itineraries={allItineraries} />
      <LatestItinerary itineraries={allItineraries} />
      <Adventure itineraries={allItineraries} />
      <Trekking itineraries={allItineraries} />
    </main>
  );
}
