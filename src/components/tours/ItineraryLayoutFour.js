import Image from "next/image";
import Link from "next/link";
// import { format } from "date-fns";

const ItineraryLayoutFour = ({ itinerary }) => {
  return (
    <div className="group flex flex-col items-center text-dark dark:text-light">
      <Link href={itinerary.url} className="h-full overflow-hidden">
        <Image
          src={itinerary.image.filePath.replace("../public", "")}
          placeholder="blur"
          blurDataURL={itinerary.image.blurhashDataUrl}
          alt={itinerary.title}
          width={itinerary.image.width}
          height={itinerary.image.height}
          className="aspect-[4/3] w-full h-full object-cover object-center"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>

      <div className="flex flex-col w-full mt-4 shadow-md px-2">
        <span className="uppercase dark:text-accentDark font-bold text-xs sm:text-sm border-b">
          {itinerary.tags[0]}
        </span>
        <Link href={itinerary.url} className="inline-block my-2">
          <h2 className="text-base line-clamp-6 sm:text-lg">
            <span className="cursor-pointer">{itinerary.description}</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default ItineraryLayoutFour;
