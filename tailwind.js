module.exports = {
  important: true,
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#FFFFFF",
      secondary: "#ffed4a",
      danger: "#e3342f",
    }),
    container: {
      center: true,
    },
    fontFamily: {
      nuni: ["Quicksand", "sans-serif"],
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
