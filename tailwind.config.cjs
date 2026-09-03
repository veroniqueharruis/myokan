/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", ...defaultTheme.fontFamily.sans],
        serif: ["'Noto Serif'", ...defaultTheme.fontFamily.serif],
        heading: ["'Noto Serif'", ...defaultTheme.fontFamily.serif],
      },
      fontSize: {
        "xs": ["var(--text-xs)", { lineHeight: "var(--leading-tight)" }],
        "sm": ["var(--text-sm)", { lineHeight: "var(--leading-snug)" }],
        "base": ["var(--text-base)", { lineHeight: "var(--leading-normal)" }],
        "lg": ["var(--text-lg)", { lineHeight: "var(--leading-relaxed)" }],
        "xl": ["var(--text-xl)", { lineHeight: "var(--leading-heading-sm)" }],
        "2xl": ["var(--text-2xl)", { lineHeight: "var(--leading-heading-sm)" }],
        "3xl": ["var(--text-3xl)", { lineHeight: "var(--leading-heading)" }],
        "4xl": ["var(--text-4xl)", { lineHeight: "var(--leading-heading)" }],
        "5xl": ["var(--text-5xl)", { lineHeight: "var(--leading-display)" }],
        "6xl": ["var(--text-6xl)", { lineHeight: "var(--leading-display)" }],
      },
      lineHeight: {
        display: "var(--leading-display)",
        heading: "var(--leading-heading)",
        "heading-sm": "var(--leading-heading-sm)",
        normal: "var(--leading-normal)",
        relaxed: "var(--leading-relaxed)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
