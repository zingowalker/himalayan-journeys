"use client";

import { useEffect, useState } from "react";
import { IoArrowUpCircle } from "react-icons/io5";

export default function ScrollToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight; // Get the window height
    const scrollHeight = document.documentElement.scrollHeight; // Get the total scrollable height
    const scrollPosition = window.scrollY; // Get the current scroll position
    if (scrollPosition > 0.7 * (scrollHeight - windowHeight)) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div>
      {/* <div style={{ height: "155rem" }} /> */}

      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="fixed bottom-5 right-5"
        >
          <IoArrowUpCircle className="h-6 w-6" />
        </button>
      )}
    </div>
  );
}
