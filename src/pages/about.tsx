import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { AboutType } from "../types/AboutTypes";

export const query = graphql`
  query {
    allContentfulAboutPage {
      edges {
        node {
          title
          body {
            raw
          }
          image {
            file {
              url
            }
          }
          seoTitle
          seoDescription
          seoSiteUrl
        }
      }
    }
  }
`;

export default function About({ data }: AboutType) {
  const about = data.allContentfulAboutPage.edges[0].node;
  return (
    <Layout
      title={about.seoTitle}
      description={about.seoDescription}
      siteUrl={about.seoSiteUrl}
    >
      <section className="flex flex-col items-center w-2/3 p-6 mb-4 rounded bg-slate-700">
        <h1 className="text-3xl text-slate-200">{about.title}</h1>
        {about.image ? (
          <img
            className="w-[300px]"
            src={about.image.file.url}
            alt={about.title}
          />
        ) : null}
        <div className="text-slate-200 [&>p]:mt-4 [&>ol>li]:mt-4 [&>h4]:text-xl [&>h4]:mt-4">
          {renderRichText(about.body)}
        </div>
      </section>
    </Layout>
  );
}
