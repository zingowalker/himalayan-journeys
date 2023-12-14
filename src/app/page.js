export const metadata = {
  title: "Eco India Journeys",
  description: `Eco India Journeys is a Travel Agency, registered under UT Ladakh, India Government`,
};

import { allItineraries } from "contentlayer/generated";
// import HomeCover from "../components/Home/HomeCover";
import Featured from "../components/Home/Featured";
import LatestItinerary from "../components/Home/LatestItinerary";
import Adventure from "../components/Home/Adventure";
import Trekking from "../components/Home/Trekking";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center">
      <Slider itineraries={allItineraries}/>
      {/* <HomeCover itineraries={allItineraries} /> */}
      <Featured itineraries={allItineraries} />
      <LatestItinerary itineraries={allItineraries} />
      <Adventure itineraries={allItineraries} />
      <Trekking itineraries={allItineraries} />
    </main>
  );
}
