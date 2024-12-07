import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
      },
      colors: {
        light: {
          DEFAULT: "#ffffff",
          "50": "#f9fafb",
          "100": "#f3f4f6",
          "200": "#e5e7eb",
          "300": "#d1d5db",
          "400": "#9ca3af",
          "500": "#6b7280",
          "600": "#4b5563",
          "700": "#374151",
          "800": "#1f2937",
          "900": "#111827",
          "950": "#030712",
        },
        dark: {
          DEFAULT: "#030712",
          "50": "#111827",
          "100": "#112937",
          "200": "#374151",
          "300": "#4b5563",
          "400": "#607280",
          "500": "#e2e8f0",
          "600": "#cbd5e1",
          "700": "#94a3b8",
          "800": "#64748b",
          "900": "#334155",
          "950": "#131410",
        },
        emerald: {
          "500": "#010901", // Corrected the hex code for emerald 500 to be valid
        },
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            background: "#FFFFFF",
            foreground: "#030712",
            primary: {
              DEFAULT: "#111827",
              foreground: "#f9fafb",
            },
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#030712",
            foreground: "#FFFFFF",
            primary: { DEFAULT: "#f9fafb", foreground: "#111827" },
          },
        },
      },
    }),
  ],
} satisfies Config;
