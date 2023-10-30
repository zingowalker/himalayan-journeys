"use client";
import Link from "next/link";
import Logo from "./Logo";
import {
  DribbbleIcon,
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from "../Icons";
// import siteMetadata from "@/src/utils/siteMetaData";
// import { useThemeSwitch } from "../Hooks/useThemeSwitch";
// import { useState } from "react";
import { cx } from "@/src/utils";

const Header = () => {
  return (
    <header className="w-full p-4 px-5 sm:px-10 flex items-center justify-between">
      <Logo />
      <nav
        className="w-max py-3 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium items-center flex sm:hidden
        fixed top-6 right-1/2 translate-x-1/2 bg-light/80  backdrop-blur-sm z-50
        transition-all ease duration-300"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/reviews" className="mx-2">
          Reviews
        </Link>
        <Link href="/contact" className="mx-2">
          Contact
        </Link>
        <button>
          <SunIcon />
        </button>
      </nav>
      <div className="hidden sm:flex items-center">
        <a
          href="https://example.com"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon />
        </a>

        <a
          href="https://example.com"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://example.com"
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <DribbbleIcon />
        </a>
      </div>
    </header>
  );
};

export default Header;
