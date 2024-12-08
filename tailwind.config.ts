import { nextui } from "@nextui-org/react";
import { appTypographyPlugin } from "./src/utils/tailwind-plugins";
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
                    "100": "#1f2937",
                    "200": "#374151",
                    "300": "#4b5563",
                    "400": "#6b7280",
                    "500": "#9ca3af",
                    "600": "#d1d5db",
                    "700": "#e5e7eb",
                    "800": "#f3f4f6",
                    "900": "#f9fafb",
                    "950": "#ffffff",
                },
                emerald: {
                    "500": "#10b981", // Updated the emerald 500 to the correct hex code
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
                        background: "#f9fafb",
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
                        background: "#111827",
                        foreground: "#FFFFFF",
                        primary: { DEFAULT: "#f9fafb", foreground: "#111827" },
                    },
                },
            },
        }),
        appTypographyPlugin,
    ],
} satisfies Config;
