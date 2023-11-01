/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#1b1b1b",
        light: "#fff",
        accent: "#a16207",
        accentDark: "#ffdb4d",
        gray: "#747474",
        amber: "#C97219",
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"],
      },
      animation: {
        roll: "roll 24s linear infinite",
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      screens: {
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px",
        // @media (min-width: 480px){...}
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),

    plugin(function ({ addUtilities }) {
      const colors = [
        "text-red-500",
        "text-blue-500",
        "text-yellow-500",
        "text-green-500",
        "text-purple-500",
        "text-pink-500",
        "text-indigo-500",
        "text-teal-500",
        "text-gray-500",
        "text-orange-500",
      ];

      const multiColorClasses = {};

      colors.forEach((color, index) => {
        multiColorClasses[`.text-multicolor > *:nth-child(${index + 1})`] = {
          color: color,
        };
      });

      addUtilities(multiColorClasses);
    }),
  ],
};
