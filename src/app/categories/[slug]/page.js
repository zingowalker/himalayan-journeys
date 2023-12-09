import { allItineraries } from "@/.contentlayer/generated";
import ItineraryLayoutThree from "@/src/components/tours/ItineraryLayoutThree";
import Categories from "@/src/components/tours/Categories";
import GithubSlugger, { slug } from "github-slugger";

const slugger = new GithubSlugger();

export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allItineraries.map((itinerary) => {
    if (itinerary.isPublished) {
      itinerary.tags.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });

  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")}`,
    description: `Know more about ${
      params.slug === "all" ? "ladakh" : params.slug
    } through our collection of itineraries`,
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  const itineraries = allItineraries.filter((itinerary) => {
    return itinerary.tags.some((tag) => {
      const slugified = slug(tag);
      if (!allCategories.includes(slugified)) {
        allCategories.push(slugified);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugified === params.slug;
    });
  });

  return (
    <article className="mt-12 flex flex-col text-dark dark:text-light">
      <div className=" px-5 sm:px-10  md:px-24  sxl:px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-2xl md:text-4xl lg:text-5xl">
          #{params.slug}
        </h1>
        <span className="mt-2 inline-block">
          {params.slug.replaceAll("-", " ")}
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />

      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-16 mt-5 sm:mt-10 md:mt-24 sxl:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32">
        {itineraries.map((itinerary, index) => (
          <article key={index} className="col-span-1 row-span-1 relative">
            <ItineraryLayoutThree itinerary={itinerary} />
          </article>
        ))}
      </div>
    </article>
  );
};

export default CategoryPage;
