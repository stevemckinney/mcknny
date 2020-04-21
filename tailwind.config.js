// See https://tailwindcss.com/docs/configuration for details
const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  theme: {
    screens: {
      xxs: "360px",
      xxsMax: {"max": "359px"},
      xs: "480px",
      xsMax: {"max": "479px"},
      sm: "640px",
      smMax: {"max": "639px"},
      md: "768px",
      mdMax: {"max": "767px"},
      lg: "960px",
      lgMax: {"max": "959px"},
      xl: "1280px",
      xlMax: {"max": "1279px"},
      xxl: "1440px",
      xxlMax: {"max": "1439px"}
    },
    fontFamily: {
      display: ["alverata", "serif"],
      body: ["gira-sans", "sans-serif"],
    },
    colors: {
      // PWA
      background_color: "#fff",
      theme_color: "#00ffff",
      
      // General
      black: colors.black,
      white: colors.white,
      
      // Primary
      madison: "var(--color-madison)",
      spruce: "var(--color-spruce)",
      gold: "var(--color-gold)",
      
      // Secondary
      feldspar: "var(--color-feldspar)",
      seagull: "var(--color-seagull)",
      thulian: "var(--color-thulian)",
      tumbleweed: "var(--color-tumbleweed)",
      
      // Shades & text
      blanc: "var(--color-blanc)",
      sidecar: "var(--color-sidecar)"
    },
    fontSize: {
      "f9": "10px",
      "f8": "12px",
      "f7": "14px",
      "f6": "16px",
      "f5": "18px",
      "f4": "21px",
      "f3": "24px",
      "f2": "32px",
      "f1": "40px",
      "headline": "48px"
    },
    lineHeight: {
      'x-tight': '1.166666667'
    },
    rotate: {
      '-15': '-15deg',
      '-30': '-30deg',
      '45': '45deg',
    },
  },
  extend: {
    gridTemplateColumns: {
      '16': 'repeat(16, minmax(0, 1fr))'
    },
    gridColumnStart: {
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16'
    },
    gridColumnEnd: {
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16'
    },
  },
  variants: {
    spacing: ["responsive"],
    fontSize: ["responsive"]
  },
  corePlugins: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require(`@tailwindcss/custom-forms`)],
};
