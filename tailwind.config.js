module.exports = {
  purge: {
    // enabled: process.env.NODE_ENV === 'production',
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
      cursive: ["Style Script", "cursive"],
    },
    colors: {
      white: "#fff",
      black: "#212121",
      gold: "#daa520",
      red: "#e77070",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
