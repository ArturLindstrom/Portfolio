import * as React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { LinkType } from "../types/linkType";

export default function HeaderComponent() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulPage {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `);
  return (
    <header className="flex items-center justify-between p-4 text-white bg-[#c62368] h-[10vh] max-w-full">
      <Link to="/">
        <h1 className="text-4xl font-bold">Home</h1>
      </Link>
      <nav className="flex items-center justify-between space-x-4">
        <Link to="/projects">Projects</Link>
        {data.allContentfulPage.edges.map((link: LinkType) => (
          <Link to={`/${link.node.slug}`} key={link.node.slug}>
            {link.node.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
