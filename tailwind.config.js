/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#f7fafc",
      light: "#ecedfb",
      purple: "#7148FC",
      midpurple: "#6E56CF",
      darkpurple: "#58469c",
      checkpruple: "#5030BD",
      darkerpurple: "#211A30",
      frakingpurple: "#1B1625",
      "is-this-purple": "#2E2345",
      pleasesleep: "#14131b",
      footerbg: "#141417",
      "light-purple": "#D8CDFF",
      "lighter-purple": "#bbafd6",
      purple2: "#AE96FD",
      royalblue: "#3B82F6",
      metal: "#CBD5E1",
      midnightblue: "#0F172A",
      skynight: "#304065",
      "royalblue-dark-momentum": "#426AC6",
      hover_royal: "#2E52A5",
      purpleisfriendly: "#8860EF",
      headerbg: "#121215",
      learn: "#8EC9FF",
      collab: "#B2FFC3",
      build: "#A78CFF",
      badass: "#100E18",
      midgrey: "#B8BFC6",
      grey: "#767885",
      darktempgrey: "#252529",
      darktempgreybc: "#4c4c53",
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        sm: "0.125rem",
        md: "0.375rem",
        lg: "0.5rem",
      },
      boxShadow: {
        shbuild: "4px 4px 100px 10px rgba(39, 35, 230, 0.14)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
