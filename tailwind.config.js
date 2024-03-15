/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
      square: 'square',
      roman: 'upper-roman',
    },
    extend: {
      fontFamily: {
        'rajdhani': ["Rajdhani", 'sans-serif'],
        'roboslab': ["Roboto Slab", 'serif'],
        'poppins': ["Poppins", 'sans-serif'],
        'nunitoSans': ["Nunito Sans", 'sans-serif'],
        'barlow': ["Barlow", 'sans-serif'],
        'lato': ["Lato", 'sans-serif'],
        'protest': ["Protest Revolution", 'sans-serif'],
        'cinzel': ["Cinzel Decorative", "serif"],
        'ephesis': ["Ephesis", "cursive"],
        'aboreto': ["Aboreto", "system-ui"],
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake", "retro"],
  },
};

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: tailwindConfig.theme.extend,
  },
  plugins: [],
  
});
