/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{ts,tsx}"
    ],
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
    daisyui: {
        themes: [
            {
                light: {
                    primary: "#000000", // Black primary color
                    "base-100": "#F5F5F5", // White base color
                    "base-content": "#1A1A1A", // Dark text color
                    "base-200": "#FFFFFF", // Light gray
                    "base-300": "#E5E5E5", // Darker light gray
                    secondary: "#F0F0F0", // Light gray
                    accent: "#3B82F6", // Blue accent
                    neutral: "#F9FAFB", // Very light gray
                }
            },
            {
                dark: {
                    primary: "#FFFFFF", // White primary color
                    "base-100": "#1A1A1A", // Dark background color
                    "base-content": "#FFFFFF", // White text color
                    "base-200": "#2A2A2A", // Dark gray
                    "base-300": "#3A3A3A", // Darker gray
                    secondary: "#4B5563", // Gray
                    accent: "#3B82F6", // Blue accent
                    neutral: "#1F2937", // Dark gray
                }
            }
        ]
    },
    darkMode: ["class", `[data-theme="dark"]`]
}
