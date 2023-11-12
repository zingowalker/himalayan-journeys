"use client";
import React from "react";
import { DotLottiePlayer } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      className="dark:bg-transparent text-white"
      src="/contact.lottie"
      autoplay
      loop
    ></DotLottiePlayer>
  );
};

export default LottieAnimation;
