import React from "react";
import Layout from "../../components/layout";
import SEO from "../../components/seo";

import { useSiteMetadata } from "../hooks/sitemetadata";
import { useFrontmatter } from "../hooks/frontmatter";

function Single() {
  const { published, title, role, category  } = useFrontmatter();

  return (
    <Layout>
      <SEO title="{title}" />
      {children}
    </Layout>
  )
}

export default Single;
