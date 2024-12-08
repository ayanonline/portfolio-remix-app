import plugin from "tailwindcss/plugin";

export const appTypographyPlugin = plugin(function ({ addComponents }) {
    addComponents({
        // Heading 1
        ".h1": {
            "@apply text-4xl sm:text-6xl sm:leading-[72px] font-semibold sm:font-bold":
                {},
        },
        // Heading 2
        ".h2": {
            "@apply text-lg sm:text-3xl sm:leading-[40px] font-semibold tracking-[-0.02em]":
                {},
        },
        // Heading 3
        ".h3": {
            "@apply text-base sm:text-2xl sm:leading-[36px] font-semibold tracking-[-0.02em]":
                {},
        },
        // Subtitle
        ".subtitle": {
            "@apply text-base sm:text-lg leading-[28px] font-normal": {}, // Mobile (18px) and Desktop (20px)
        },
        // Body1
        ".body1": {
            "@apply text-sm sm:text-base leading-[24px] sm:leading-[28px] font-normal":
                {}, // Mobile (16px) and Desktop (18px)
        },
        // Body2
        ".body2": {
            "@apply text-sm leading-[24px] font-normal": {}, // 16px and 24px for all screen sizes
        },
        // Body3
        ".body3": {
            "@apply text-xs leading-[20px] font-normal": {}, // 14px and 20px for all screen sizes
        },
    });
});
