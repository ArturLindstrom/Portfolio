import * as React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import { AboutType } from "../types/AboutTypes";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";

export const query = graphql`
  query {
    allContentfulAbout {
      edges {
        node {
          about {
            raw
          }
        }
      }
    }
  }
`;
export default function About({ data }: AboutType) {
  const about = data.allContentfulAbout.edges[0].node.about;

  return (
    <Layout>
      {/* render rich text */}
      <section className="flex flex-col items-center justify-start min-h-[80vh] gap-5 bg-bottom bg-no-repeat bg-cover">
        <article className="flex flex-col items-center w-2/3 text-center rounded bg-slate-300 m-9 p-9">
          <h1 className="m-1 text-3xl text-center">About us</h1>
          <div className="m-1 text-xl text-left">
            {/* @ts-ignore */}
            {renderRichText(about)}
          </div>
        </article>
      </section>
    </Layout>
  );
}
