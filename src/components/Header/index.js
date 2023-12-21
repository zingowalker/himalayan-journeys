"use client";

import Logo from "./Logo";
import { MoonIcon, SunIcon } from "../Icons";
import siteMetadata from "@/src/utils/siteMetaData";
import { useThemeSwitch } from "../Hooks/useThemeSwitch";
import { cx } from "@/src/utils";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Reviews",
    href: "https://www.google.com/search?q=ecoindiajourneys%0D%0A%0D%0A&btnK=Google+Search&sca_esv=579484062&sxsrf=AM9HkKkwF5kM5lmChQjgXmqATTb7hG4QKw%3A1699120679242&source=hp&ei=J4ZGZej6DPacseMPpcuigA4&iflsig=AO6bgOgAAAAAZUaUN1hFp94i32Yej2JXoVuaFnEb_nNT#btnK=Google%20Search&lrd=0x38fdebc4481689d9:0x8865dd6bfab06f35,1",
    target: "_blank",
    current: false,
  },
  { name: "Contact", href: "/contact", current: false },
  { name: "About", href: "/about", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const [mode, setMode] = useThemeSwitch();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Disclosure
      as="nav"
      className={`w-full text-softBg fixed top-0 left-0 right-0 z-50 transition-all ease-in-out delay-500 text-bold ${
        scrolled ? "bg-sky-950" : "bg-transparent"
      }`}
    >
      {({ open }) => (
        <>
          <div className="w-full px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden rounded-full">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2  hover:bg-softBg focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span
                    className="absolute -inset-0.5"
                    onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  />
                  {open ? (
                    <XMarkIcon
                      className={cx(
                        "block h-5 w-5",
                        mode === "light"
                          ? "bg-softBg text-dark"
                          : "bg-dark text-light"
                      )}
                      aria-hidden="true"
                    />
                  ) : (
                    <Bars3Icon
                      className={cx(
                        "block h-5 w-5",
                        mode === "light"
                          ? "bg-softBg text-dark"
                          : "bg-dark text-light"
                      )}
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Logo />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex px-4 py-4 items-center justify-between">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? "text-white" : "hover:text-light",
                          "rounded-md px-4 py-2 capital"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  onClick={() => setMode(mode === "light" ? "dark" : "light")}
                  className={cx(
                    "relative  w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 focus:outline-none focus:ring-2 dark:focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                    mode === "light"
                      ? "bg-softBg text-dark"
                      : "bg-dark text-light"
                  )}
                  aria-label="theme-switcher"
                >
                  {mode === "light" ? (
                    <MoonIcon className={"fill-dark"} />
                  ) : (
                    <SunIcon className={"fill-light"} />
                  )}
                </button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? "text-white" : "hover:text-light",
                    "block rounded-md px-3 py-2 "
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
