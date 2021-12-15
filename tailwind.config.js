const colors = require('tailwindcss/colors')

// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: 'media', // or 'media' or 'class'
    theme: {
        extend: {},
        colors: {
            transparent: "transparent",
            current: "currentColor",
            'white': "#f8f9f7",
            "red": "#942313",
            "black": "#1a1b1b",
            "gray": colors.gray,
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}