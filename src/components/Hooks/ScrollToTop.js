"use client";

import { useEffect, useState } from "react";

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
          className="fixed bottom-5 right-5 bg-stone-800 dark:bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L0 14h6v8h12v-8h6z" fill="#fff" />
          </svg>
        </button>
      )}
    </div>
  );
}
