import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "15+ Years Experience",
  "10+ Years of Travel Agency",
  "99% Client Satisfaction",
  "Ladakh",
  "Kashmir",
  "Uttarkhand",
  "Arunachal Pradesh",
  "Shillong",
  "Rajasthan",
  "Kerala"
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
