import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";
import Link from "next/link";

export const metadata = {
  title: "About Us",
  description: `Here are some details about our online travel agency.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Activities />
      <h2 className="mt-8 font-semibold text-lg md:text-2xl self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
        Have a destination in mind? Reach out to me 📞 from{" "}
        <Link href="/contact" className="!underline underline-offset-2">
          here
        </Link>{" "}
        and let's make it happen.
      </h2>
    </>
  );
}
