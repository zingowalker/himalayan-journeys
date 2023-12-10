import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";

export const metadata = {
  title: "About Us",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.ecoindiajourneys.com",
  sameAs: ["https://www.instagram.com/ecoindiajourneys/"],
  logo: "https://www.ecoindiajourneys.com/logoonsearch.png",
  name: "Eco India Journeys",
  description:
    "We are committed to responsible & eco-tourism. Over 15 years of experience in Indian Himalayas.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Eco India Journeys, near Jammu & Kashmir Bank, Leh, Ladakh",
    addressLocality: "Leh",
    addressCountry: "IN",
    postalCode: "194101",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "ecoindiajourneys@gmail.com",
    telephone: "+91-880-077-7421",
  },
};

export default function About() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutCoverSection />
      <Activities />
    </>
  );
}
