export const metadata = {
  title:
    "Eco India Journeys: Trekking, Mountaineering, Package Tours, Motorcycle adventures",
  description: `Eco India Journeys is a Travel Agency, based in Leh. Registered under UT Ladakh, India Government`,
};

import { allItineraries } from "contentlayer/generated";
import HomeCover from "../components/Home/HomeCover";
import Featured from "../components/Home/Featured";
import LatestItinerary from "../components/Home/LatestItinerary";
import Adventure from "../components/Home/Adventure";
import TrekkingInLadakh from "../components/Home/TrekkingInLadakh";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeCover itineraries={allItineraries} />
      <TrekkingInLadakh itineraries={allItineraries} />
      <Featured itineraries={allItineraries} />
      <LatestItinerary itineraries={allItineraries} />
      <Adventure itineraries={allItineraries} />
    </main>
  );
}
