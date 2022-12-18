/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.tsx"],
    theme: {
        extend: {
            borderWidth: {
                1: "1px",
            },
            backgroundImage: {
                hero: "url('/bgBlur.svg')",
            },
            colors: {
                primary: {
                    dark: "#01080E",
                    marine: "#011627",
                    darkMarine: "#011221",
                },
                secondary: {
                    sky: "#607B96",
                    waterGreen: "#3C9D93",
                    blue: "#4D5BCE",
                    white: "#FFFFFF",
                },
                accent: {
                    orange: "#FEA55F",
                    waterGreenShinny: "#43D9AD",
                    redOrange: "#E99287",
                    lilac: "#C98BDF",
                },
                lines: "#1E2D3D",
                gradient: {
                    start: "#4D5BCE",
                    end: "#43D9AD",
                },
            },
            fontFamily: {
                sans: ["Fira Code", "sans serif"],
            },
            fontSize: {
                extraHeadline: "5.75rem",
                headline: "3.875rem",
                subHeadline: "2rem",
                bodyText: "1.125rem",
                labels: "1rem",
                codeSnippets: "0.875rem",
            },
        },
    },
    plugins: [
        require("tailwindcss-radix")({
            variantPrefix: "radix",
        }),
        require("tailwind-scrollbar"),
    ],
};