/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "12.8px",
      sm: "14px",
      base: "1rem",
      heading: "1.5rem",
    },
    fontFamily: {
      inter: ["var(--font-inter)", "sans-serif"],
      roboto: ["var(--font-roboto)"],
      poppins: ["var(--font-poppins)"],
    },
    extend: {
      padding: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
      },
      margin: {
        5: "5px",
        10: "10px",
        15: "15px",
        20: "20px",
        25: "25px",
        30: "30px",
        35: "35px",
        40: "40px",
        45: "45px",
        50: "50px",
        55: "55px",
        60: "60px",
        65: "65px",
        70: "70px",
        75: "75px",
        80: "80px",
        85: "85px",
        90: "90px",
        95: "95px",
        100: "100px",
      },

      colors: {
        primary: "#333333",
        primaryhover: "#4B5760",
        secondary: "#81B2FD",
        success: "#588431",
        secondaryhover: "#0760B2",
        danger: "#ff0000",
        warning: "#F4B740",
        // black: "#121212",
        // blue: "#45A3C0",
        // brown: "#8A4717",
        // cyan: "#3CAE9C",
        // darkBlue: "#0760B2",
        // darkGray: "#4B5760",
        // gray: "#96989A",
        // green: "#588431",
        // Khaki: "#ACA771",
        // orange: "#FA9247",
        // pink: "#D0084F",
        // red: "#BB080E",
        // violet: "#8005FA",
        // yellow: "#FACA05",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },

    screens: {
      "5xl": { max: "1800px" },
      // => @media (max-width: 1800px) { ... }
      "4xl": { max: "1699px" },
      "3xl": { max: "1575px" },
      "2xl": { max: "1440px" },

      xl: { max: "1360px" },

      lg: { max: "1200px" },
      tablet: { max: "1023px" },

      md: { max: "992px" },

      sm: { max: "768px" },

      xs: { max: "576px" },

      xxs: { max: "360px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
