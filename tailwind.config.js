/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "system-ui", "sans-serif"],
      },
      colors: {
        dark: "#0a192f",
        ink: "#050d1a",
        brand: {
          200: "#f3e9d2",
          300: "#e3cda0",
          400: "#d4b483",
          500: "#b98f55",
          600: "#7a5c33",
        },
      },
      boxShadow: {
        soft: "0 8px 30px rgba(0,0,0,0.3)",
        glow: "0 0 60px rgba(100, 255, 218, 0.15)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(20px, -20px)" },
        },
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        drift: "drift 8s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
