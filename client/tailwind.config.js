/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all source files for Tailwind classes
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0d0d0d",
        accent: "#00ff88",
        faded: "#1a1a1a"
      },
    },
  },
  plugins: [],
}

