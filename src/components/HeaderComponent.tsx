import * as React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { LinkType } from "../types/linkType";

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulNavLink(sort: { createdAt: ASC }) {
        edges {
          node {
            link
            path
          }
        }
      }
    }
  `);
  return (
    <header className="flex flex-row items-center justify-between gap-5 h-[10vh] bg-slate-800 p-4">
      <Link
        to="/"
        className="text-3xl transition-all text-slate-200 hover:text-cyan-600 "
      >
        Blobshop
      </Link>
      <nav className="flex flex-row items-center justify-between gap-5">
        {data.allContentfulNavLink.edges.map((link: LinkType) => (
          <Link
            to={link.node.path}
            key={link.node.path}
            className="text-xl transition-all text-slate-200 hover:text-cyan-600 "
            activeStyle={{
              color: "rgb(8 145 178)",
              textDecoration: "underline",
            }}
          >
            {link.node.link}
          </Link>
        ))}
      </nav>
    </header>
  );
}
