const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./index.html', './src/**/*.jsx'],

  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
  },

  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('not-last', '&:not(:last-child)');
    }),
  ],
};
