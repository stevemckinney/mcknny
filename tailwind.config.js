// See https://tailwindcss.com/docs/configuration for details
const { colors } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      display: ['alverata', 'serif'],
      body: ['gira-sans', 'sans-serif'],
    },
    colors: {
      // General
      black: colors.black,
      white: colors.white,
      
      // Primary
      madison: 'var(--color-madison)',
      spruce: 'var(--color-spruce)',
      gold: 'var(--color-gold)',
      
      // Secondary
      feldspar: 'var(--color-feldspar)',
      seagull: 'var(--color-seagull)',
      thulian: 'var(--color-thulian)',
      
      // Shades & text
      blanc: 'var(--color-blanc)',
      sidecar: 'var(--color-sidecar)'
    },
    fontSize: {
      'f9': '10px',
      'f8': '12px',
      'f7': '14px',
      'f6': '16px',
      'f5': '18px',
      'f4': '21px',
      'f3': '24px',
      'f2': '32px',
      'f1': '40px',
      'headline': '48px'
    },
    extend: {},
  },
  variants: {
    spacing: ['responsive'],
    fontSize: ['responsive']
  },
  corePlugins: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require("@tailwindcss/custom-forms")],
};
