import Link from "next/link";

export const metadata = {
  title: "Error: 404",
};

export default function NotFound() {
  return (
    <main className="py-32 w-full dark:bg-dark flex justify-center font-mr">
      <div className="relative flex flex-col items-center justify-center">
        <h1
          className={`inline-block text-dark dark:text-light
      text-base font-bold w-full xl:text-4xl text-center`}
        >
          Oops! We can't seem to find the page you're looking for.
        </h1>
        <h2
          className={`inline-block text-dark dark:text-light
      text-base font-semibold w-full xl:text-2xl text-center mt-4 tracking-wide leading-snug`}
        >
          You may have mistyped the address or the page may have moved.
        </h2>
        <Link
          href="/"
          className="self-center mt-8 inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2
        font-semibold text-light hover:border-dark hover:bg-light hover:text-dark 
        dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
        "
        >
          Go To Home
        </Link>
      </div>
    </main>
  );
}
