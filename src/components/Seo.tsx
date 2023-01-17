import * as React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { SeoProps } from "../types/SeoTypes";

export default function Seo(props: SeoProps) {
  const data = useStaticQuery(graphql`
    query SeoQuery {
      site {
        siteMetadata {
          title
          description
          siteUrl
          image
          keywords
        }
      }
    }
  `);

  const defaults = data.site.siteMetadata;
  // if component props are passed in, use them, otherwise use defaults from siteMetadata
  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const image = props.image || defaults.image;
  const url = props.siteUrl || defaults.siteUrl;
  const keywords = props.keywords || defaults.keywords;

  return (
    <Helmet>
      {/* standard SEO */}
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="image" content={image} />
      <meta name="keywords" content={keywords} />
      {/* social media */}
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@gatsbyjs" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
