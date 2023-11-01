import "./globals.css";
import { cx } from "@/src/utils";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

import { Inter, Manrope } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  title: "Himalayan Journeys",
  description: "Adventure tour company to Himalayas, based in Leh, India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          manrope.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
