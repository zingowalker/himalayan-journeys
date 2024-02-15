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
        dark: "#0f172a",
        // light: "#a8a29e",
        light: "#fff",
        accent: "#a16207",
        accentDark: "#ffdb4d",
        gray: "#747474",
        amber: "#C97219",
        softBg: "#f0f0f0",
        softTextColor: "#626262",
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
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
