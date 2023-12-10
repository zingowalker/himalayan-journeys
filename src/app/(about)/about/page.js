import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";

export const metadata = {
  title: "About Us",
  description: `Information on our travel agency.`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.ecoindiajourneys.com",
  sameAs: ["https://www.instagram.com/ecoindiajourneys/"],
  logo: "https://www.ecoindiajourneys.com/logoonsearch.png",
  name: "Eco India Journeys",
  description:
    "Eco India Journeys is committed to responsible & eco-tourism. 15+ years of travel agency experience in the Himalayas.",
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
