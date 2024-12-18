/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{ts,tsx}",
        "./index.html",
        "../shared/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require("daisyui"),
        require("@tailwindcss/typography"),
        require("@tailwindcss/aspect-ratio"),
        require("@tailwindcss/container-queries")
    ],
    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    'primary': '#000000',
                    'secondary': '#ffffff',
                    'accent': '#888888',
                    'neutral': '#f5f5f5',
                    'base-100': '#ffffff',
                    'info': '#3b82f6',
                    'success': '#22c55e',
                    'warning': '#facc15',
                    'error': '#ef4444',
                },
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    'primary': '#ffffff',
                    'secondary': '#000000',
                    'accent': '#888888',
                    'neutral': '#222222',
                    'base-100': '#000000',
                    'info': '#3b82f6',
                    'success': '#22c55e',
                    'warning': '#facc15',
                    'error': '#ef4444',
                }
            }
        ],
    },
    darkMode: ['class', '[data-theme="dark"]']
}
