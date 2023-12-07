"use client";

import Link from "next/link";
import Logo from "./Logo";
import {
  // InstagramIcon,
  // LinkedinIcon,
  MoonIcon,
  SunIcon,
  // TwitterIcon,
} from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { useState } from "react";
import { cx } from "@/src/utils";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);
  let Links = [
    { name: "Home", link: "/" },
    { name: "Blog", link: "/coming-soon" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="dark:text-light">
      <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
        <div className="text-sm cursor-pointer flex items-center justify-around flex-row gap-1">
          <div className="flex">
            <Logo />
            <span className="flex items-center text-orange-500 duration-300">
              Eco India Journeys
            </span>
          </div>
        </div>
        <div className="absolute top-6 left-6 md:hidden">
          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={cx(
              "w-6 h-6 ease flex items-center justify-center rounded-full p-1",
              mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
            )}
            aria-label="theme-switcher"
          >
            {mode === "light" ? (
              <MoonIcon className={"fill-dark"} />
            ) : (
              <SunIcon className={"fill-dark"} />
            )}
          </button>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-6 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>

        <ul
          className={`min-[320px] bg-light/80 backdrop-blur-sm md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all ease duration-300 ease-in ${
            open ? "top-14" : "top-[-490px] z-100"
          }`}
        >
          {Links.map((link) => (
            <li className="md:ml-8 md:my-0 my-7 cursor-pointer">
              <a
                href={link.link}
                className="text-orange-500 duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
          {/* <button className="btn bg-blue-600 text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
            Get Started
          </button> */}
          <button
            className="flex justify-center sm:hidden z-50"
            onClick={toggle}
            aria-label="Hamburger Menu"
          ></button>
        </ul>
      </div>

      {/* <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-md capitalize items-center flex  sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50
        transition-all ease duration-300
        "
        style={{
          top: click ? "1rem" : "-5rem",
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link
          href="https://www.google.com/search?q=ecoindiajourneys%0D%0A%0D%0A&btnK=Google+Search&sca_esv=579484062&sxsrf=AM9HkKkwF5kM5lmChQjgXmqATTb7hG4QKw%3A1699120679242&source=hp&ei=J4ZGZej6DPacseMPpcuigA4&iflsig=AO6bgOgAAAAAZUaUN1hFp94i32Yej2JXoVuaFnEb_nNT#btnK=Google%20Search&lrd=0x38fdebc4481689d9:0x8865dd6bfab06f35,1"
          target="_blank"
          className="mx-2"
        >
          Reviews
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav> */}

      {/* <nav
        className="w-max py-3 px-12 border border-solid border-dark rounded-md font-medium capitalize items-center hidden sm:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-50"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link
          href="https://www.google.com/search?q=ecoindiajourneys%0D%0A%0D%0A&btnK=Google+Search&sca_esv=579484062&sxsrf=AM9HkKkwF5kM5lmChQjgXmqATTb7hG4QKw%3A1699120679242&source=hp&ei=J4ZGZej6DPacseMPpcuigA4&iflsig=AO6bgOgAAAAAZUaUN1hFp94i32Yej2JXoVuaFnEb_nNT#btnK=Google%20Search&lrd=0x38fdebc4481689d9:0x8865dd6bfab06f35,1"
          target="_blank"
          className="mx-2"
        >
          Reviews
        </Link>
        <Link href="/contact" className="mx-2">
          Contact Us
        </Link>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={cx(
            "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1",
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          )}
          aria-label="theme-switcher"
        >
          {mode === "light" ? (
            <MoonIcon className={"fill-dark"} />
          ) : (
            <SunIcon className={"fill-dark"} />
          )}
        </button>
      </nav> */}
      {/* <div className="hidden sm:flex items-center">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to us via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.twitter}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to us via Twitter"
          target="_blank"
        >
          <TwitterIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
        <a
          href={siteMetadata.instagram}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check us profile on Instagram"
          target="_blank"
        >
          <InstagramIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div> */}
    </header>
  );
};

export default Header;
