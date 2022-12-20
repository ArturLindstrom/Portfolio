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
        }
      }
    }
  }
`;

export default function About({ data }: AboutType) {
  const about = data.allContentfulAboutPage.edges[0].node;
  return (
    <Layout>
      <section className="flex flex-col items-center w-2/3 p-6 rounded bg-slate-700">
        <h1 className="text-3xl text-slate-200">{about.title}</h1>
        {about.image ? (
          <img
            className="w-[150px]"
            src={about.image.file.url}
            alt={about.title}
          />
        ) : null}
        <div className="text-slate-200 [&>p]:mt-4">
          {renderRichText(about.body)}
        </div>
      </section>
    </Layout>
  );
}
