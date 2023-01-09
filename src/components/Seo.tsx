import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

export default function Seo() {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
        }
      }
    }
  `);

  const meta = data?.site?.siteMetadata;

  return (
    <Helmet>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description} />
      <link rel="canonical " href={meta.siteUrl} />
      <meta name="image" content={meta.image} />

      <meta property="og:url" content={meta.siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={meta.title} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gatsbyjs" />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.image} />
    </Helmet>
  );
}
