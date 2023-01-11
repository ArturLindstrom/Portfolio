import * as React from "react";
import { Link, useStaticQuery } from "gatsby";
import { graphql } from "gatsby";
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
    <header className="flex items-center justify-between p-4 text-slate-200 bg-slate-900 h-[10vh] max-w-full">
      <Link to="/">
        <h1 className="text-4xl font-bold hover:underline">Home</h1>
      </Link>
      <nav className="flex items-center justify-between space-x-4">
        <BurgerMenu />
      </nav>
    </header>
  );
}
