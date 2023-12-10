import "./globals.css";
import { cx } from "../../src/utils";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import siteMetadata from "../utils/siteMetaData";
import { Inter, Manrope, Roboto } from "next/font/google";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-in",
});

const roboto = Roboto({
  weight: '300',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mr",
});

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    template: `%s | ${siteMetadata.title}`,
    default: siteMetadata.title, // a default is required when creating a template
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: [siteMetadata.description, "Your travel store for more info"],
    url: siteMetadata.siteUrl,
    siteName: siteMetadata.title,
    images: [siteMetadata.siteLogo],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.title,
    images: [siteMetadata.socialBanner],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cx(
          inter.variable,
          roboto.variable,
          "font-mr bg-light dark:bg-dark"
        )}
      >
        <Header />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
