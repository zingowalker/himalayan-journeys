import Image from "next/image";
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
