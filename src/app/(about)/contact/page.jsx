import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/LottieAnimation";
import siteMetadata from "@/src/utils/siteMetaData";

export const metadata = {
  title: "Contact Us",
  description: `Contact us for Motorbike, Trekking, Wildlife, Packaged tours and Multi-day itinerary. Email ${siteMetadata.email}`,
};

export default function Contact() {
  return (
    <section className="w-full h-auto md:h-[75vh] border-b-2 border-solid border-dark dark:border-light flex  flex-col md:flex-row items-center justify-center text-dark dark:text-light">
      <div className="inline-block w-full sm:w-4/5 md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation />
      </div>
      <div className="w-full mt-4 md:w-3/5 flex flex-col items-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize  text-2xl xs:text-3xl sm:text-4xl">
          Get in touch
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Our friendly team would love to hear from you.
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
