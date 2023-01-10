import * as React from "react";
import { graphql } from "gatsby";
import { PageType } from "../types/pageType";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Layout from "../components/Layout";

export const query = graphql`
  query ($id: String!) {
    contentfulPage(id: { eq: $id }) {
      image {
        file {
          url
        }
      }
      title
      slug
      body {
        raw
      }
    }
  }
`;

export default function page({ data }: PageType) {
  const page = data.contentfulPage;

  return (
    <Layout>
      <section className="flex flex-col items-center w-2/3 p-6 rounded bg-slate-700">
        <h1 className="text-3xl text-slate-200">{page.title}</h1>
        {page.image ? <img src={page.image.file.url} alt={page.title} /> : null}
        <div className="text-slate-200 [&>p]:mt-4">
          {renderRichText(page.body)}
        </div>
      </section>
    </Layout>
  );
}
