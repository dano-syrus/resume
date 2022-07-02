module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")],
  daisyui: {
    themes: [
      {
        darkx: {
          primary: "#57F287",
          secondary: "#5865F2",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#0F1117",
        },
      }
    ],
  },
}
