/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Incluye esta línea si usas `src` como carpeta raíz de tus componentes
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-interna": "url('/HeaderInterna.png')",
        back: "linear-gradient(135deg, #fbdada 0%, #f7e4e4 14.6%, #f5ecec 27.7%, #f2f5f5 39.8%, #f2f5f5 50.5%, #f3f7f7 59.6%, #f6fafa 68.2%, #fbfefe 76.5%, #fff 84.5%)",
        nav: "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 20%, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.05) 60%, rgba(0, 0, 0, 0) 80%)"
      },

      spacing: {
        932: "932px",
        28: "28",
      },
      colors: {
        rojo: "#f94940",
        "red-200": "#fca5a5",
        "custom-gray": "#EDEDED",
        "off-white": "#F8F8F8",
      },
      opacity: {
        20: "0.2",
      },
      fontFamily: {
        sans: ['"DM Sans"', "sans-serif"],
        "dm-sans": ["DM Sans", "sans-serif"],
        "instrument-serif": ["Instrument Serif", "serif"],
      },
    },
    fontSize: {
      lg: "18px",
      inherit: "inherit",
      50: "50px",
      "mobile-50": "50px",
      "h2-desktop": "76px",
      "h2-mobile": "32px",
      "h3-desktop": "64px",
      "24px": "24px",
    },
    letterSpacing: {
      wider: "0.2em", // Adjusted for 20% letter spacing
    },
    fontWeight: {
      400: "400",
    },
    lineHeight: {
      65: "65px",
    },
    textAlign: {
      left: "left",
    },
    screens: {
      mq414: {
        raw: "screen and (max-width: 414px)",
      },
      mq413: {
        raw: "screen and (max-width: 413px)",
      },
      mq318: {
        raw: "screen and (max-width: 318px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
