import { format, parseISO } from "date-fns";
import Link from "next/link";
import { slug } from "github-slugger";
// import ViewCounter from "./ViewCounter";

const ItineraryDetails = ({ itinerary, slug: itinerarySlug }) => {
  return (
    <div className="px-2 md:px-10 bg-orange-500 dark:bg-accent text-light dark:text-dark py-2 flex items-center justify-evenly flex-wrap text-lg sm:text-xl font-medium mx-5 md:mx-10 rounded-md">
      <a className="m-3">
        {format(parseISO(itinerary.publishedAt), "LLLL, yyyy")}
      </a>
      <span className="m-3">{/* <ViewCounter slug={itinerarySlug} /> */}</span>
      <span className="m-3">Grade 4+</span>
      <div className="m-3">{itinerary.readingTime.text}</div>
      <Link href={`/categories/${slug(itinerary.tags[0])}`} className="m-3">
        #{itinerary.tags[0]}
      </Link>
    </div>
  );
};

export default ItineraryDetails;