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
      xxl: "1680px",
      xxlMax: {"max": "1679px"}
    },
    fontFamily: {
      display: ["var(--font-display)"],
      body: ["var(--font-body)"],
      title: ["var(--font-title)"],
    },
    colors: {
      // pwa
      background_color: "#fff",
      theme_color: "#00ffff",

      // general
      black: colors.black,
      white: colors.white,

      // blue
      madison: "var(--color-madison)",
      prussian: "var(--color-prussian)",
      seagull: "var(--color-seagull)",
      ohahu: "var(--color-ohahu)",

      // green
      jungle: "var(--color-jungle)",
      spruce: "var(--color-spruce)",
      patina: "var(--color-patina)",
      harp: "var(--color-harp)",
      blanc: "var(--color-blanc)",

      // pink
      thulian: "var(--color-thulian)",
      melon: "var(--color-melon)",
      remy: "var(--color-remy)",
      pearl: "var(--color-pearl)",

      // orange
      feldspar: "var(--color-feldspar)",
      tumbleweed: "var(--color-tumbleweed)",

      // yellow
      goldenrod: "var(--color-goldenrod)",
      gold: "var(--color-goldenrod)",
      jasmine: "var(--color-jasmine)",
      marigold: "var(--color-gold)",
      sidecar: "var(--color-sidecar)",
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
      "f1": "48px",
      "headline": "64px"
    },
    rotate: {
      '-15': '-15deg',
      '-30': '-30deg',
      '45': '45deg',
    },
    letterSpacing: {
      headline: '-3px',
      title: '2.5px'
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
      title: '1.166666667'
    },
    extend: {
      spacing: {
        '36': '9rem'
      },
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
      }
    },
  },
  variants: {
    spacing: ["responsive"],
    fontSize: ["responsive"],
  },
  corePlugins: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [require(`@tailwindcss/custom-forms`)],
};
