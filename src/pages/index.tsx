import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { frontPageType } from "../types/frontPageType";

export const query = graphql`
  query {
    allContentfulHomePage {
      edges {
        node {
          heroImage {
            file {
              url
            }
          }
          welcomeMessage
          paragraph
        }
      }
    }
  }
`;

export default function IndexPage({ data }: frontPageType) {
  const frontPage = data.allContentfulHomePage.edges[0].node;
  return (
    <Layout>
      <section
        className="flex flex-col items-center justify-start min-h-[80vh] gap-5 bg-bottom bg-no-repeat bg-cover overflow-hidden"
        style={{ backgroundImage: `url(${frontPage.heroImage.file.url})` }}
      >
        <h1 className="font-bold mt-14 text-7xl text-slate-200 text-focus-in">
          {frontPage.welcomeMessage}
        </h1>
        <p className="text-2xl text-center text-slate-200 text-focus-in">
          {frontPage.paragraph}
        </p>
      </section>
    </Layout>
  );
}
