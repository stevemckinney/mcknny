const resolveConfig = require("tailwindcss/resolveConfig");

const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);
module.exports = {
  siteMetadata: {
    title: `steve mckinney`,
    short_name: `sm`,
    description: `Portfolio`,
    author: `@stevemckinney`,
    navigation: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "portfolio",
        link: "/portfolio",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "contact",
        link: "/contact",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steve mckinney`,
        short_name: `sm`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.background_color,
        theme_color: fullConfig.theme.colors.theme_color,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://stevemckinney.net`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require("postcss-import"),
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          require(`postcss-preset-env`)({
            stage: 0,
          }),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/global.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/src/pages/portfolio`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 640,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-smartypants`,
            options: {
              dashes: `oldschool`,
            },
          },
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `96`,
            },
          },
          {
            resolve: `gatsby-plugin-catch-links`,
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
