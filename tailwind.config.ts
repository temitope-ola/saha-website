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
        /* ── Design system palette ─────────── */
        papier: "#FFF8F1",
        encre: "#1A1917",
        pierre: {
          DEFAULT: "#8A8275",
          fonce: "#6E665A",
        },
        cuivre: {
          DEFAULT: "#C26B3F",
          50: "#fdf6f2",
          100: "#f9e8dd",
          200: "#f0ccb3",
          300: "#e5a97f",
          400: "#d4874f",
          500: "#C26B3F",
          600: "#a85a34",
          700: "#8c4a2b",
          800: "#733d24",
          900: "#5f331e",
        },
        nuit: {
          DEFAULT: "#193453",
          deep: "#0B1524",
        },

        /* ── Tailwind stone (kept for structural use) ── */
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

        /* ── Legacy aliases (for gradual migration) ── */
        accent: {
          50: "#fdf6f2",
          100: "#f9e8dd",
          200: "#f0ccb3",
          300: "#e5a97f",
          400: "#d4874f",
          500: "#C26B3F",
          600: "#a85a34",
          700: "#8c4a2b",
          800: "#733d24",
          900: "#5f331e",
        },
        warm: {
          50: "#fdf8f6",
          100: "#f8eeea",
          200: "#f0ddd5",
          300: "#e4c8b8",
          400: "#d4a98e",
          500: "#c48b6a",
        },
      },
      fontFamily: {
        serif: [
          "var(--font-fraunces)",
          "Georgia",
          "Cambria",
          "serif",
        ],
        sans: [
          "var(--font-figtree)",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "var(--font-jetbrains)",
          "JetBrains Mono",
          "monospace",
        ],
      },
      fontSize: {
        /* ── Display: Fraunces opsz 144 at 40pt+ ── */
        "display-lg": ["4rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "display": ["3rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "display-sm": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.01em" }],
        /* ── Sub-display: Fraunces opsz 72 at 16–28pt ── */
        "heading": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "subheading": ["1.375rem", { lineHeight: "1.45" }],
        /* ── Body: Figtree wght 400, leading 1.6 ── */
        "body-lg": ["1.125rem", { lineHeight: "1.65" }],
        "body": ["0.9375rem", { lineHeight: "1.6" }],
        "body-sm": ["0.8125rem", { lineHeight: "1.6" }],
        /* ── UI / Eyebrow: Figtree wght 500 ── */
        "caption": ["0.75rem", { lineHeight: "1.5" }],
        "eyebrow": ["0.5625rem", { lineHeight: "1.4", letterSpacing: "0.22em" }],
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
