/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                brown: "#44312b",
                offWhite: "#f2f2f2",
                pink: "#c45389",
                lightPink: "#d369a0",
            },
            padding: {
                "8%": "8%",
            },
        },
    },
    plugins: [],
}
