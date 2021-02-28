const path = require(`path`);
const remarkSlug = require(`remark-slug`);
const resolveConfig = require(`tailwindcss/resolveConfig`);
const tailwindConfig = require(`./tailwind.config.js`);
const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  flags: {
    PRESERVE_WEBPACK_CACHE: true,
  },
  siteMetadata: {
    title: `mcknny`,
    short_name: `mcknny`,
    siteUrl: `https://mcknny.com`,
    description: `I’m a designer who helps you grow steadily without resorting to annoyances`,
    author: `@irsteve`,
    navigation: [
      {
        title: `work`,
        route: `/work`,
      },
      {
        title: `process`,
        route: `/process`,
      },
      // {
      //   title: `about`,
      //   route: `/about`,
      // },
      {
        title: `contact`,
        route: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      name: `pages`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: `work`,
      options: {
        path: `${__dirname}/content/work`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      name: `images`,
      options: {
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steve mckinney`,
        short_name: `sm`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.background_color,
        theme_color: fullConfig.theme.colors.theme_color,
        display: `standalone`,
        icon: `src/images/apple-touch-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://mcknny.com`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postcssOptions: {
          plugins: [
          require(`postcss-import`),
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          require(`postcss-preset-env`)({
            stage: 0,
            autoprefixer: {
              grid: true,
            },
            features: {
              "nesting-rules": true,
            },
            browsers: ["last 2 versions"],
          }),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
          ],
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          work: require.resolve(`./src/components/layout/single.js`),
          default: require.resolve(`./src/components/layout/single.js`),
        },
        gatsbyRemarkPlugins: [
          `gatsby-remark-unwrap-images`,
          `gatsby-remark-smartypants`,
          `gatsby-plugin-feed-mdx`,
          `gatsby-remark-slug`,
          `gatsby-remark-embed-figma`,
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1366,
              withWebp: true,
              // Markdown captions do not work in mdx yet. More info: https://github.com/gatsbyjs/gatsby/pull/16574#issue-306869033
              markdownCaptions: false,
              linkImagesToOriginal: false,
              tracedSVG: false,
              quality: 95,
              backgroundColor: `#121212`,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `cbu1mww`,
        },
      },
    },
  ],
};
