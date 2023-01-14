import * as React from "react";
import { useStaticQuery } from "gatsby";
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
    <header className="flex items-center justify-between px-4 text-slate-200 bg-slate-900 h-[10vh] max-w-full">
      <nav className="flex items-center justify-end w-full space-x-4">
        <BurgerMenu />
      </nav>
    </header>
  );
}
