export const metadata = {
  title: "Eco India Journeys: A travel agency for multi-day itinerary",
  description: `providing the best of services and excellence`,
};

import { allItineraries } from "contentlayer/generated";
import HomeCover from "../components/Home/HomeCover";
import Featured from "../components/Home/Featured";
import LatestItinerary from "../components/Home/LatestItinerary";

export default function Home() {
  console.log(allItineraries);

  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover itineraries={allItineraries} />
      <Featured itineraries={allItineraries} />
      <LatestItinerary itineraries={allItineraries} />
    </main>
  );
}
