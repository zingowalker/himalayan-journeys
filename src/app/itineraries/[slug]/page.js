import ItinerariesDetails from "@/src/components/tours/ItineraryDetails";
import RenderMdx from "@/src/components/tours/RenderMdx";
import Tag from "@/src/components/Elements/Tag";
import siteMetadata from "@/src/utils/siteMetaData";
import { allItineraries } from "contentlayer/generated";
import { slug } from "github-slugger";
import Image from "next/image";

export async function generateStaticParams() {
  return allItineraries.map((itinerary) => ({
    slug: itinerary._raw.flattenedPath,
  }));
}

export async function generateMetadata({ params }) {
  const itinerary = allItineraries.find(
    (itinerary) => itinerary._raw.flattenedPath === params.slug
  );
  if (!itinerary) {
    return;
  }

  const publishedAt = new Date(itinerary.publishedAt).toISOString();
  const modifiedAt = new Date(
    itinerary.updatedAt || itinerary.publishedAt
  ).toISOString();

  let imageList = [siteMetadata.socialBanner];
  if (itinerary.image) {
    imageList =
      typeof itinerary.image.filePath === "string"
        ? [
            siteMetadata.siteUrl +
              itinerary.image.filePath.replace("../public", ""),
          ]
        : itinerary.image;
  }
  const ogImages = imageList.map((img) => {
    return { url: img.includes("http") ? img : siteMetadata.siteUrl + img };
  });

  const authors = itinerary?.author ? [itinerary.author] : siteMetadata.author;

  return {
    title: itinerary.title,
    description: itinerary.description,
    openGraph: {
      title: itinerary.title,
      description: itinerary.description,
      url: siteMetadata.siteUrl + itinerary.url,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: publishedAt,
      modifiedTime: modifiedAt,
      images: ogImages,
      authors: authors.length > 0 ? authors : [siteMetadata.author],
    },
    twitter: {
      card: "summary_large_image",
      title: itinerary.title,
      description: itinerary.description,
      images: ogImages,
    },
  };
}

export default function ItineraryPage({ params }) {
  const itinerary = allItineraries.find(
    (itinerary) => itinerary._raw.flattenedPath === params.slug
  );

  let imageList = [siteMetadata.socialBanner];
  if (itinerary.image) {
    imageList =
      typeof itinerary.image.filePath === "string"
        ? [
            siteMetadata.siteUrl +
              itinerary.image.filePath.replace("../public", ""),
          ]
        : itinerary.image;
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "article",
    headline: itinerary.title,
    description: itinerary.description,
    image: imageList,
    datePublished: new Date(itinerary.publishedAt).toISOString(),
    dateModified: new Date(
      itinerary.updatedAt || itinerary.publishedAt
    ).toISOString(),
    author: [
      {
        "@type": "Person",
        name: itinerary?.author ? [itinerary.author] : siteMetadata.author,
        url: siteMetadata.siteUrl + itinerary.url,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <div className="mb-8 text-center relative w-full h-[70vh] bg-dark">
          <div className="w-full z-10 flex flex-col items-center justify-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <Tag
              name={itinerary.tags[0]}
              link={`/categories/${slug(itinerary.tags[0])}`}
              className="px-6 text-sm py-2"
            />
            <h1 className="inline-block mt-6 font-semibold capitalize text-light text-2xl md:text-3xl lg:text-5xl !leading-normal relative w-5/6">
              {itinerary.title}
            </h1>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 h-full bg-dark/60 dark:bg-dark/40" />
          <Image
            src={itinerary.image.filePath.replace("../public", "")}
            placeholder="blur"
            blurDataURL={itinerary.image.blurhashDataUrl}
            alt={itinerary.title}
            width={itinerary.image.width}
            height={itinerary.image.height}
            className="aspect-square w-full h-full object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <ItinerariesDetails itinerary={itinerary} slug={params.slug} />

        <div className="grid grid-cols-12  gap-y-8 lg:gap-8 sxl:gap-16 mt-8 px-5 md:px-10">
          <div className="col-span-12 lg:col-span-4">
            <details
              className="border-[1px] border-solid border-dark dark:border-light text-dark dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-hidden overflow-y-auto"
              open
            >
              <summary className="text-lg font-semibold capitalize cursor-pointer">
                Table of content
              </summary>
              <ul className="mt-4 font-in text-base">
                {itinerary.toc.map((heading) => {
                  return (
                    <li key={`#${heading.slug}`} className="py-1">
                      <a
                        href={`#${heading.slug}`}
                        data-level={heading.level}
                        className="data-[level=two]:pl-0  data-[level=two]:pt-2
                                       data-[level=two]:border-t border-solid border-dark/40
                                       data-[level=three]:pl-4
                                       sm:data-[level=three]:pl-6
                                       flex items-center justify-start
                                       "
                      >
                        {heading.level === "three" ? (
                          <span className="flex w-1 h-1 rounded-full bg-dark mr-2">
                            &nbsp;
                          </span>
                        ) : null}

                        <span className="hover:underline">{heading.text}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </div>
          <RenderMdx itinerary={itinerary} />
        </div>
      </article>
    </>
  );
}
