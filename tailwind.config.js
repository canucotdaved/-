module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cerareg: ["CeraCY-Regular"],
        cerabold: ["CeraCY-Bold"],
      },
      backgroundImage: {
        "gradient-radial-to-br":
          "radial-gradient(40% 75% at 45% 14%, var(--tw-gradient-stops))",
      },
      colors: {
        txtcolor: "#919395",
      },
    },
  },
  plugins: [],
};
