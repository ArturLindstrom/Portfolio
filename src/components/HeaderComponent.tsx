import * as React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
import { DynamicLinkType, LinkType } from "../types/linkType";
import BurgerMenu from "./BurgerMenu";

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
        <BurgerMenu
          links={[
            { title: "Home", url: "/" },
            { title: "About", url: "/about" },
            { title: "Contact", url: "/contact" },
          ]}
        ></BurgerMenu>
        {/* <Link to="/projects">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link> */}
        {data.allContentfulPage.edges.map((link: DynamicLinkType) => (
          <Link to={`/${link.node.slug}`} key={link.node.slug}>
            {link.node.title}
          </Link>
        ))}
      </nav>
    </header>
  );
}
