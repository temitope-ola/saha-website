import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        stone: {
          50: "#fafaf9",
          100: "#f5f5f4",
          150: "#efefed",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
          950: "#0c0a09",
        },
        warm: {
          50: "#fdf8f6",
          100: "#f8eeea",
          200: "#f0ddd5",
          300: "#e4c8b8",
          400: "#d4a98e",
          500: "#c48b6a",
        },
        sage: {
          50: "#f6f7f6",
          100: "#e3e7e3",
          200: "#c7cfc7",
          300: "#a3b0a3",
          400: "#7f8f7f",
          500: "#637163",
        },
      },
      fontFamily: {
        serif: [
          "Georgia",
          "Cambria",
          '"Times New Roman"',
          "Times",
          "serif",
        ],
        sans: [
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        "heading": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "subheading": ["1.25rem", { lineHeight: "1.5" }],
        "body-lg": ["1.125rem", { lineHeight: "1.7" }],
        "body": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "caption": ["0.8125rem", { lineHeight: "1.5" }],
      },
      maxWidth: {
        content: "1200px",
        prose: "680px",
      },
      spacing: {
        "section": "7rem",
        "section-sm": "4.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
