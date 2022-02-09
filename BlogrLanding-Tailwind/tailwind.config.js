module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          lightRed: "hsl(356, 100%, 66%)",
          veryLightRed: "hsl(355, 100%, 74%)",
          darkBlue: "hsl(208, 49%, 24%)",
        },
        secondary: {
          grayishBlue: "hsl(240, 2%, 79%)",
          darkGrayishBlue: "hsl(207, 13%, 34%)",
          blackBlue: "hsl(240, 10%, 16%)",
        },
        gradient: {
          introFrom: "hsl(13, 100%, 72%)",
          introTo: "hsl(353, 100%, 62%)",
          bodyFrom: "hsl(237, 17%, 21%)",
          bodyTo: "hsl(237, 23%, 32%)",
        },
      },
      fontFamily: {
        overpass: ["Overpass"],
        ubuntu: ["Ubuntu"],
      },
    },
  },
  plugins: [],
};
