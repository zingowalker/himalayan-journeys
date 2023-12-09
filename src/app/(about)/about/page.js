import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";

export const metadata = {
  title: "About Us",
  description: `Here are some details about our travel agency.`,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.ecoindiajourneys.com",
  sameAs: ["https://www.instagram.com/ecoindiajourneys/"],
  logo: "https://www.ecoindiajourneys.com/logo2.png",
  name: "Eco India Journeys",
  description: "Eco India Journeys is committed to responsible & eco-tourism through all its policies. We feel strongly that all our holidays should benefit the local communities, protect the environment by minimizing pollution, and respect local traditions, religion and heritage. So, in our tours, we raise awareness to these topics and also promote interactions with local people - we don’t do different things, but do the same things differently. At Eco India Journeys, we make sure that your vacation dreams are specialized according to your plan and budget, and you miss nothing whilst in the Himalayas. Over 15 years of experience in trekking, mountaineering, cultural, Eco and Special interest tours.",
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
