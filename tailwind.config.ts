import type { Config } from "tailwindcss";
export default{
    content: ["./index.html", "./src/**/*.{ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                display: ["Georgia", "serif"],
                body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
            },
            boxShadow: {
                soft: "0 18px 60px rgba(36,52,43,0.12)"
            }
        }
    },
    plugins: []
} satisfies Config;