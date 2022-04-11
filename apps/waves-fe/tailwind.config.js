const { join } = require('path');
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  mode: 'jit',
  presets: [require('../../tailwind-workspace-preset.js')],
  purge: [
    join(__dirname, 'components/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}'),
    join(__dirname, 'utils/**/*.{js,ts,jsx,tsx}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      boxShadow: {
        'light': '0 1px 3px 0 rgba(59, 130, 246, 0.5), 0 1px 2px 0 rgba(59, 130, 246, 0.2)',
        'dark': '0 1px 3px 0 rgba(255, 255, 255, 0.5), 0 1px 2px 0 rgba(255, 255, 255, 0.2)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    cursor: true,
  },
}
