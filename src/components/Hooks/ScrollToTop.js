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
    if (window.scrollY > 500) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <div>
      <h2>Top of the page</h2>

      <div style={{ height: "155rem" }} />

      {showButton && (
        <button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          className="fixed bottom-8 right-8 bg-orange-500 text-white px-4 py-2 rounded-lg shadow-lg"
        >
          to top
        </button>
      )}
    </div>
  );
}
