import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { PolicyType } from "../types/policyTypes";

export const query = graphql`
  query {
    allContentfulIntegrityPolicy {
      edges {
        node {
          policy {
            raw
          }
        }
      }
    }
  }
`;

export default function Policy({ data }: PolicyType) {
  const policy = data.allContentfulIntegrityPolicy.edges[0].node.policy;

  return (
    <Layout>
      {/* render rich text */}
      <section className="flex flex-col items-center justify-start min-h-[80vh] gap-5 bg-bottom bg-no-repeat bg-cover">
        <article className="flex flex-col items-center w-2/3 text-center rounded bg-slate-300 m-9 p-9">
          <h1 className="m-1 text-3xl text-center">Policy</h1>
          <div className="m-1 text-xl text-left">
            {/* @ts-ignore */}
            {renderRichText(policy as any)}
          </div>
        </article>
      </section>
    </Layout>
  );
}
