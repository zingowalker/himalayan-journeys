"use client";

import Logo from "../Header/Logo";
import ScrollToTop from "../Hooks/ScrollToTop";
import {
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import siteMetadata from "@/src/utils/siteMetaData";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="md:mt-8 dark:text-light">
      <div className="pt-12 lg:pt-16 text-sm">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-16 grid grid-cols-2 gap-12 md:grid-cols-4 lg:grid-cols-6 lg:gap-8">
            <div className="col-span-full lg:col-span-2">
              <div className="mb-2 lg:-mt-2">
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 text-xl font-bold text-black md:text-2xl"
                  aria-label="logo"
                >
                  <Logo />
                </a>
              </div>
              <p className="mb-6 sm:pr-8 dark:text-softBg">
                Member of All Ladakh Tour Operator Association (ALTOA)
                Registered under UT Leh-Ladakh, India.
              </p>
              <div className="flex gap-4">
                <a
                  href={siteMetadata.instagram}
                  aria-label="Check our profile on Instagram"
                  target="_blank"
                >
                  <AiOutlineInstagram className="dark:fill-softBg cursor-pointer hover:bg-accentDark" />
                </a>
                <a
                  href={siteMetadata.linkedin}
                  aria-label="Check our profile on Linkedin"
                  target="_blank"
                >
                  <AiOutlineLinkedin className="dark:fill-softBg cursor-pointer hover:bg-accentDark" />
                </a>
                <a
                  href={siteMetadata.twitter}
                  aria-label="Check our profile on Twitter"
                  target="_blank"
                >
                  <AiOutlineTwitter className="dark:fill-softBg cursor-pointer hover:bg-accentDark" />
                </a>
                <a
                  href={siteMetadata.facebook}
                  aria-label="Check our profile on Facebook"
                  target="_blank"
                >
                  <AiOutlineFacebook className="dark:fill-softBg cursor-pointer hover:bg-accentDark" />
                </a>
              </div>{" "}
              <br />
              <blockquote className="uppercase dark:text-accentDark">
                We are mostly active on instagram
              </blockquote>
            </div>

            <div>
              <div className="mb-4 font-bold dark:text-accentDark uppercase tracking-widest">
                Destination
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Ladakh
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Uttarkhand
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Kerala
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Northeast
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Bhutan
                  </a>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 font-bold dark:text-accentDark uppercase tracking-widest text-gray-800">
                Company
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="/about"
                    className="dark:text-softBg transition duration-100"
                  >
                    About
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.google.com/search?q=ecoindiajourneys%0D%0A%0D%0A&btnK=Google+Search&sca_esv=579484062&sxsrf=AM9HkKkwF5kM5lmChQjgXmqATTb7hG4QKw%3A1699120679242&source=hp&ei=J4ZGZej6DPacseMPpcuigA4&iflsig=AO6bgOgAAAAAZUaUN1hFp94i32Yej2JXoVuaFnEb_nNT#btnK=Google%20Search&lrd=0x38fdebc4481689d9:0x8865dd6bfab06f35,1"
                    target="_blank"
                    className="dark:text-softBg transition duration-100"
                  >
                    Reviews
                  </Link>
                </div>
                <div>
                  <Link
                    href="/why-us"
                    className="dark:text-softBg transition duration-100"
                  >
                    Why Us
                  </Link>
                </div>
              </nav>
            </div>

            <div>
              <div className="mb-4 dark:text-accentDark font-bold uppercase tracking-widest">
                Support
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <Link
                    href="https://wa.me/918587044340"
                    target="_SEJ"
                    rel="noreferrer"
                    className="dark:text-softBg transition duration-100"
                  >
                    Whats App
                  </Link>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 dark:text-accentDark font-bold uppercase tracking-widest">
                Discover
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <div>
                    <Link
                      href="/faq"
                      className="dark:text-softBg transition duration-100"
                    >
                      FAQ
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
            <div>
              <div className="mb-4 font-bold dark:text-accentDark uppercase tracking-widest">
                Legal
              </div>

              <nav className="flex flex-col gap-4">
                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Terms of Service
                  </a>
                </div>

                <div>
                  <a
                    href="#"
                    className="dark:text-softBg transition duration-100"
                  >
                    Payment Policy
                  </a>
                </div>

                <div>
                  <a
                    href="cancellation-policy"
                    className="dark:text-softBg transition duration-100"
                  >
                    Cancellation Policy
                  </a>
                </div>
              </nav>
            </div>
          </div>

          <div className="dark:text-softBg border-t py-8 flex items-center justify-center px-2 text-sm">
            <div>
              &copy; {`${new Date().getFullYear()}`} Eco India Journeys. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <ScrollToTop />
      </div>
    </footer>
  );
}
