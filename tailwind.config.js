module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",   // <<< REQUIRED
  ],
  theme: {
    extend: {
      colors:{
        'deep-blue': 'oklch(15.3% 0.066 243.157)',
      },
      spacing:{
         '18': '45.5rem',
         '17':'22.5 rem',  // e.g., gap-18
      }
    },
  },
  plugins: [],
};
