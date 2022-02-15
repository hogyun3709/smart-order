const tailwindcssForms = require('@tailwindcss/forms');

module.exports = {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    tailwindcssForms,
  ],
};
