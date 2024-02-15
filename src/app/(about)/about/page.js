import AboutCoverSection from "@/src/components/About/AboutCoverSection";
import Activities from "@/src/components/About/Activities";

export const metadata = {
  title: "About Us",
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Activities />
    </>
  );
}
