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
        "news-box": "linear-gradient(90deg,#FFFFFF87,#E7E7E7,#FFFFFF87)",
        "bottom-note": "linear-gradient(270deg,#005487 0%,transparent 100%)",
      },
      blur: {
        xxs: "0.5px",
      },
      spacing: {
        0.5: "2px",
        1.2: "5px",
        1.5: "6px",
        1.9: "7px",
        2.2: "9px",
        2.5: "10px",
        3.1: "12.5px",
        3.5: "14px",
        3.7: "15px",
        4.5: "18px",
        5.5: "22px",
        5.7: "23px",
        6.2: "25px",
        7.5: "30px",
        7.7: "31px",
        8.2: "33px",
        8.5: "34px",
        9.5: "38px",
        10.5: "42px",
        10.7: "43px",
        11.5: "46px",
        12.7: "51px",
        15.7: "63px",
        16.7: "67px",
        17: "68px",
        18: "72px",
        19: "76px",
        19.7: "79px",
        22.5: "90px",
        47.2: "189px",
        51: "204px",
        74.7: "299px",
      },
    },
    colors: {
      "navy-blue": "#005487",
      "dark-green": "#2C8125",
      "snowflake-grey": "#F3F3F3",
      transparent: "transparent",
      white: "#FFFFFF",
      "slate-blue-grey": "#A2A3A9",
      "medium-grey": "#8A8A8A",
      black: "#000000",
      "pale-yellow": "#FFD600",
      "dark-grey": "#525252",
      "light-grey": "#D9D9D9",
      "soft-red": "#C24242",
    },
  },
  plugins: [],
};
