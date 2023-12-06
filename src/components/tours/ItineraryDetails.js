import Link from "next/link";
import { slug } from "github-slugger";
import ViewCounter from "./ViewCounter";

const ItineraryDetails = ({ itinerary, slug: itinerarySlug }) => {
  return (
    <div className="px-2 md:px-10 bg-stone-800 dark:bg-accent text-light dark:text-dark py-2 flex items-center justify-between flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-md">
      <span className="m-3"></span>
      {/* <span className="m-3"><ViewCounter slug={itinerarySlug} /></span> */}
      <div className="m-3">{itinerary.readingTime.text}</div>
      <Link href={`/categories/${slug(itinerary.tags[0])}`} className="m-3">
        #{itinerary.tags[0]}
      </Link>
    </div>
  );
};

export default ItineraryDetails;
