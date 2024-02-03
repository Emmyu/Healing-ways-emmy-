module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: {
          A700_b2: "#ffffffb2",
          A700_95: "#ffffff95",
          A700_cc: "#ffffffcc",
          A700_6c: "#ffffff6c",
          A700: "#ffffff",
        },
        blue_gray: {
          100: "#d5d5d5",
          200: "#a1c5d3",
          900: "#172641",
          "900_19": "#0b264119",
          "100_01": "#d9d9d9",
          "900_02": "#0b2540",
          "900_01": "#0b2641",
          "200_0c": "#a1c5d30c",
          "900_19_01": "#17264119",
          "900_d8": "#0b2540d8",
          "900_33": "#17264133",
          "900_cc": "#172641cc",
          "900_95": "#17264195",
        },
        black: {
          900: "#010101",
          "900_b2": "#010101b2",
          "900_01": "#000000",
          "900_66": "#00000066",
          "900_0c": "#0101010c",
          "900_cc": "#010101cc",
          "900_33": "#01010133",
          "900_99": "#01010199",
        },
        indigo: { "900_33": "#00007c33" },
        light_blue: { "100_33": "#a0ddff33", "100_66": "#a0ddff66" },
        teal: { 800: "#077d55" },
        blue: { 600: "#127de8", "600_44": "#127de844", "600_19": "#127de819" },
        gray: {
          100: "#f0f4fa",
          300: "#e7e7e5",
          900: "#15161d",
          "100_01": "#f7f3f0",
        },
      },
      fontFamily: {
        mulish: "Mulish",
        librefranklin: "Libre Franklin",
        ceoruse: "Ceoruse",
      },
      backgroundImage: {
        gradient: "linear-gradient(147deg ,#0b2540d8,#127de844)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
