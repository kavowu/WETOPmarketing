/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(222, 47%, 6%)",
        foreground: "hsl(0, 0%, 98%)",
        card: "hsl(222, 47%, 11%)",
        "card-foreground": "hsl(0, 0%, 98%)",
        primary: "hsl(180, 100%, 50%)",
        "primary-foreground": "hsl(222, 47%, 6%)",
        secondary: "hsl(174, 72%, 56%)",
        muted: "hsl(215, 16%, 47%)",
        "muted-foreground": "hsl(215, 16%, 47%)",
        accent: "hsl(180, 100%, 50%)",
        border: "rgba(255, 255, 255, 0.1)",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}
