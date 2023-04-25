/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      padding: {
        34: "padding: 0 8.44rem",
      },
      colors: {
        "primary-white": "#FFFBFB",
        "primary-blue": "#1DAEFF",
        "primary-gray": "#FFFFFFCC",
        "primary-text-dark-gray": "#FFFBFBA6",
        "primary-dark-gray": "#161616",
      },
    },
  },
  plugins: [],
};
