import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export const metadata = {
  title: "Error: 404",
};

const NotFound = () => {
  return (
    <section>
      <div className="py-10 px-4 dark:text-light">
        <div className="text-center">
          <p className="text-base font-semibold ">Error code: 404</p>
          <h1 className="mt-2 text-lg font-semibold tracking-tight  sm:text-5xl">
            Oops! We can't seem to find the page you're looking for.
          </h1>
          <p className="mt-4 text-base leading-7 text-gray-600">
            You may have mistyped the address or the page may have moved.
          </p>
          <div className="mt-4 flex items-center justify-center gap-x-3">
            <Link
              href={"/"}
              className="inline-flex items-center rounded-md border border-black px-3 py-2 text-sm font-semibold  shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              <FaArrowLeft size={16} className="mr-2" />
              Go back
            </Link>
            <Link
              href={"/contact"}
              className="rounded-md  px-3 py-2 text-sm font-semibold shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
