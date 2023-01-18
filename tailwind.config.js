/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                primary: "#1c4e9a",
            },
        },
        container: {
            center: true,
            padding: "1rem",
        },
        screens: {
            sm: "600px",
            md: "728px",
            lg: "984px",
            xl: "1240px",
            "2xl": "1332px",
        },
    },
    plugins: [require("@tailwindcss/line-clamp")],
};
