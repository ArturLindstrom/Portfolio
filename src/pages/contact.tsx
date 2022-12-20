import * as React from "react";
import { graphql, Link } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { ContactType } from "../types/contactTypes";
import Layout from "../components/Layout";

export const query = graphql`
  query {
    allContentfulContactPage {
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

export default function Contact({ data }: ContactType) {
  const contact = data.allContentfulContactPage.edges[0].node;
  return (
    <Layout>
      <section className="flex flex-col items-center w-2/3 p-6 rounded bg-slate-700">
        <h1 className="text-3xl text-slate-200">{contact.title}</h1>
        {contact.image ? (
          <img src={contact.image.file.url} alt={contact.title} />
        ) : null}
        <div className="text-slate-200 [&>p]:mt-4">
          {renderRichText(contact.body)}
        </div>
      </section>
    </Layout>
  );
}
