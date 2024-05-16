import Faq from "@/src/components/Faq";

export const metadata = {
  title: "FAQ",
};

export default function FaqPage() {
  return (
    <section className="flex justify-center items-center">
      <Faq />
    </section>
  );
}
