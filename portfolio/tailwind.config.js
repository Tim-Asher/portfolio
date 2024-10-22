/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "md:col-span-1",
    "md:col-span-2",
    "md:col-span-3",
    "md:col-span-4", // Add all possible values
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
