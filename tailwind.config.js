import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    // theme: {
    //     extend: {
    //         fontFamily: {
    //             sans: ['Figtree', ...defaultTheme.fontFamily.sans],
    //         },
    //     },
    // },
    theme: {
        extend: {
            colors: {
                primary: "var(--color-primary)",
                text: "var(--color-text)",
                background: "var(--color-background)",
                secondary: "var(--color-secondary)",
            },
            fontFamily: {
                grotesk: ['"Right Grotesk Medium"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
