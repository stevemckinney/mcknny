/**
 * Implement Gatsby’s Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@hooks": path.resolve(__dirname, "src/hooks"),
        "@pages": path.resolve(__dirname, "src/pages"),
        "@images": path.resolve(__dirname, "src/images"),
        "@icons": path.resolve(__dirname, "src/images/icons"),
      },
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const projectTemplate = path.resolve(
    'src/components/layout/single.js'
  );

  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      throw result.errors;
    }

    const pages = result.data.allMdx.nodes;

    // create page for each mdx node
    pages.forEach((page, index) => {
      const previous =
        index === pages.length - 1 ? null : pages[index + 1];
      const next = index === 0 ? null : pages[index - 1];

      createPage({
        path: page.fields.slug,
        component: projectTemplate,
        context: {
          slug: page.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
