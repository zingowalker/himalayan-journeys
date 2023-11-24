import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";

export const metadata = {
  title: "About Us",
  description: `Here are some details about our travel agency.`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Activities />
    </>
  );
}
