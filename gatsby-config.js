const resolveConfig = require("tailwindcss/resolveConfig");
const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);

module.exports = {
  siteMetadata: {
    title: `steve mckinney`,
    short_name: `sm`,
    description: `Portfolio`,
    author: `@irsteve`,
    "navigation": [
      {
        "name": "home",
        "link": "/"
      },
      {
        "name": "portfolio",
        "link": "/portfolio"
      },
      {
        "name": "about",
        "link": "/about"
      },
      {
        "name": "contact",
        "link": "/contact"
      }
    ]
  },
  plugins: [
    `gatsby-plugin-offline`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `steve mckinney`,
        short_name: `sm`,
        start_url: `/`,
        background_color: fullConfig.theme.colors.white,
        theme_color: fullConfig.theme.colors.spruce,
        display: `minimal-ui`,
        icon: `src/images/apple-touch-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
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
          require(`postcss-preset-env`)({ stage: 0 }),
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
     resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: 'cbu1mww'
        }
      } 
    }
  ],
};