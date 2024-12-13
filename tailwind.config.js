/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                card: {
                    dark: "#272726",
                    light: "#FFFFFF"
                }
            }
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
                    primary: "#1E1E1E",
                    "base-content": "#1B1B1B",
                    "base-100": "#F4F4F4", 
                },
                dark: {
                    // eslint-disable-next-line @typescript-eslint/no-require-imports
                    ...require("daisyui/src/theming/themes")["dark"],
                    primary: "#F4F4F4",
                    "base-content": "#F8F8F8",
                    "base-100": "#1E1E1E"
                },
            },
        ],
    },
    darkMode: ['class', '[data-theme="dark"]']
}

