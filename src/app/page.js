export const metadata = {
  title: "Eco India Journeys",
  description: `Eco India Journeys is a Travel Agency, based in Leh. Registered under UT Ladakh, India Government`,
};

import { allItineraries } from "contentlayer/generated";
import Featured from "../components/Home/Featured";
import LatestItinerary from "../components/Home/LatestItinerary";
import Adventure from "../components/Home/Adventure";
import Slider from "../components/Slider";
import TrekkingInLadakh from "../components/Home/TrekkingInLadakh";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Slider itineraries={allItineraries} />
      <Featured itineraries={allItineraries} />
      <LatestItinerary itineraries={allItineraries} />
      <Adventure itineraries={allItineraries} />
      <TrekkingInLadakh itineraries={allItineraries} />
    </main>
  );
}
