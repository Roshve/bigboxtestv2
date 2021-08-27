module.exports = {
  important: true,
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      "nuni": ["Quicksand", "sans-serif"],
    },
    extend: {
      colors: {
        cyan: "#9cdbff",
      },
      margin: {
        96: "24rem",
        128: "32rem",
      },
    },
  },
  variants: {
    opacity: ["responsive", "hover"],
  },
  purge: ["./src/**/*.html", "./src/**/*.vue", "./src/**/*.jsx"],
};
