const resolveConfig = require("tailwindcss/resolveConfig");

const tailwindConfig = require("./tailwind.config.js");

const fullConfig = resolveConfig(tailwindConfig);
module.exports = {
  siteMetadata: {
    title: `steve mckinney`,
    short_name: `mcknny`,
    siteUrl: `https://mcknny.com`,
    description: `Portfolio of Steve McKinney`,
    author: `@stevemckinney`,
    navigation: [
      {
        title: `portfolio`,
        route: `/portfolio`,
      },
      {
        title: `about`,
        route: `/about`,
      },
      {
        title: `contact`,
        route: `/contact`,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-tailwindcss`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sharp`,
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
        path: `${__dirname}/src/pages/work`,
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
        }
      }
    },
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
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        defaultLayouts: {
          work: require.resolve("./src/components/layout/single.js"),
          default: require.resolve("./src/components/layout/layout.js"),
        },
        gatsbyRemarkPlugins: [
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 960,
            sizeByPixelDensity: true,
          },
        },
      ],
      }
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
