"use client";

const changeBackground = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 20) {
    setNavbar(true);
  } else {
    setNavbar(false);
  }
};
