/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "login-box":
          "0px 4px 34px rgba(47, 134, 172, 0.25), -3.42614px -10.2784px 27.4091px rgba(46, 131, 222, 0.3), -2.28409px -2.28409px 4.56818px rgba(68, 81, 85, 0.35), 0px 0px 11.4205px rgba(0, 0, 0, 0.15), 4.56818px 4.56818px 35.4034px rgba(38, 47, 61, 0.35), inset -6.85227px -9.13636px 0px rgba(255, 255, 255, 0.2)",
        "input-box":
          "-3.42614px -3.42614px 63.9545px #FFFFFF, inset 1.73724px 1.73724px 5.21171px rgba(0, 0, 0, 0.19), inset 6.07568px 6.08033px 11.292px rgba(0, 0, 0, 0.13), inset -3.47447px -5.21171px 1.73724px rgba(255, 255, 255, 0.75), inset -5.21171px -7.81756px 4.34309px rgba(255, 255, 255, 0.93)",
        btn: "-3.47447px -1.73724px 3.47447px rgba(183, 215, 235, 0.6), 1.14205px 1.18773px 8.04px rgba(31, 54, 68, 0.9)",
      },
      backgroundImage: {
        "login-white":
          "linear-gradient(158.08deg, #F1F3F3 8.75%, rgba(241, 243, 243, 0.94) 91.6%)",
        "blue-btn":
          "linear-gradient(136.26deg, #32769F 9.08%, #015588 115.58%)",
        "info-box":
          "linear-gradient(90deg, rgba(0, 84, 135, 0) 0%, rgba(0, 84, 135, 0.5418) 27.15%, rgba(0, 84, 135, 0.63) 52.73%, rgba(0, 84, 135, 0.5418) 76.22%, rgba(0, 84, 135, 0) 100.23%)",
      },
      blur: {
        xxs: "0.5px",
      },
      spacing: {
        1.9: "7px",
        3.5: "14px",
        17: "68px",
        18: "72px",
        19: "76px",
        8.5: "34px",
        9.5: "38px",
        10.5: "42px",
        11.5: "46px",
      },
    },
    colors: {
      "navy-blue": "#005487",
      "snowflake-grey": "#F3F3F3",
      transparent: "transparent",
      white: "#FFFFFF",
      "slate-blue-grey": "#A2A3A9",
      black: "#000000",
    },
  },
  plugins: [],
};
