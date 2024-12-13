/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {

        },
    },
    plugins: [
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        require("daisyui"),
    ],
    daisyui: {
        themes: [
            {
                light: {
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    ...require("daisyui/src/theming/themes")["light"],
                    primary: "#242425",
                    "base-100": "#F4F4F4", 
                },
                dark: {
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#F4F4F4",
                    "base-100": "#242425"
                },
            },
        ],
    },
    darkMode: ['class', '[data-theme="dark"]']
}

