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
        require("daisyui")
    ],
}

