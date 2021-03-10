// See https://tailwindcss.com/docs/configuration for details
const path = require(`path`);
const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: {
    content: [
      path.join(process.cwd(), `content/**/!(*.d).{js,jsx,md,mdx,svg}`),
      path.join(process.cwd(), `src/**/!(*.d).{js,jsx,md,mdx,svg}`),
    ],
    purgeOnly: [`src/css/global.css`],
    options: {
      safelist: [
        `fill-shadow`,
        `opacity-20`,
        `opacity-40`,
        `grid-cols-10`,
        `image`,
        `figure`,
        `img`
      ],
    }
  },
  darkMode: false,
  theme: {
    screens: {
      xxs: "360px",
      xxsMax: {"max": "359px"},
      xs: "414px",
      xsMax: {"max": "413px"},
      sm: "640px",
      smMax: {"max": "639px"},
      md: "768px",
      mdMax: {"max": "767px"},
      lg: "960px",
      lgMax: {"max": "959px"},
      xl: "1280px",
      xlMax: {"max": "1279px"},
      xxl: "1440px",
      xxlMax: {"max": "1439px"},
      xxxl: "1680px",
      xxxlMax: {"max": "1659px"}
    },
    fontFamily: {
      action: ["var(--font-action)"],
      body: ["var(--font-body)"],
      display: ["var(--font-display)"],
      title: ["var(--font-title)"],
    },
    fontSize: {
      "f9": "10px",
      "f8": "12px",
      "f7": "14px",
      "f6": "16px",
      "f5": "18px",
      "f4": "21px",
      "f3": "24px",
      "f3.5": "30px",
      "f2": "36px",
      "f2.5": "40px",
      "f1": "56px",
      "f1.5": "64px",
      "headline": "72px",
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    rotate: {
      '-15': '-15deg',
      '-30': '-30deg',
      '45': '45deg',
    },
    extend: {
      spacing: {
        '36': '9rem'
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
        daintree: "var(--color-daintree)",
        seagull: "var(--color-seagull)",
        onahau: "var(--color-onahau)",
  
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
    },
  },
  variants: {
    spacing: ["responsive"],
    fontSize: ["responsive"],
  },
  corePlugins: {},
};
