/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
    mode : 'jit',
    content :
            [
                "./app/**/*.{js,ts,jsx,tsx}",
                "./pages/**/*.{js,ts,jsx,tsx}",
                "./components/**/*.{js,ts,jsx,tsx}",
                "./node_modules/flowbite-react/**/*.js",
            ],
    theme : {
        extend : {},
        colors : {
            primary : colors.blue,
            secondary : colors.purple,
        }
    },
    plugins :
            [
                require('flowbite/plugin'),
            ],
    darkMode : 'class',
}
