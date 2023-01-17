import * as React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { DynamicLinkType } from "../types/linkType";

export default function BurgerMenu() {
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
      allContentfulNavLink(sort: { createdAt: ASC }) {
        edges {
          node {
            path
            name
          }
        }
      }
    }
  `);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const sideMenu = React.useRef<HTMLDivElement>(null);
  const navLinks = data.allContentfulNavLink.edges;

  function toggleMenu() {
    // adding or removing tailwind class depending on the state of menuOpen
    // also adding or removing tabindex depending on the state of menuOpen
    // this is to make sure that the menu is accessible
    // when the menu is open, the links are focusable
    // when the menu is closed, the links are not focusable

    if (menuOpen !== true) {
      sideMenu?.current?.classList.remove("right-[-250px]");
      sideMenu?.current?.classList.add("right-0");
      sideMenu?.current?.querySelectorAll("*").forEach((el) => {
        el.setAttribute("tabindex", "0");
      });
      setMenuOpen(!menuOpen);
    } else {
      sideMenu?.current?.classList.remove("right-0");
      sideMenu?.current?.classList.add("right-[-250px]");
      sideMenu?.current?.querySelectorAll("*").forEach((el) => {
        el.setAttribute("tabindex", "-1");
      });
      setMenuOpen(!menuOpen);
    }
  }

  return (
    <div>
      <button
        className="text-4xl transition-all duration-300 cursor-pointer"
        onClick={toggleMenu}
        aria-label="Open menu"
      >
        &#9776;
      </button>
      <div
        ref={sideMenu}
        className="fixed top-0 right-[-250px] w-[240px] h-screen z-50 bg-slate-800 p-5
      flex flex-col space-y-5 text-slate-200 duration-300"
      >
        <button
          className="text-4xl text-right cursor-pointer"
          onClick={() => toggleMenu()}
          tabIndex={-1}
          aria-label="Close menu"
        >
          &times;
        </button>
        {/* looping out navLinks from contentful */}
        {navLinks.map((link: any) => (
          <Link
            className="transition-all duration-300 hover:text-primary hover:underline"
            to={link.node.path}
            key={link.node.name}
            onClick={toggleMenu}
            tabIndex={-1}
            activeClassName="text-primary"
          >
            {link.node.name}
          </Link>
        ))}
        {/* looping out link to dynamic pages from contentful */}
        {data.allContentfulPage.edges.map((link: DynamicLinkType) => (
          <Link
            className="hover:text-primary hover:underline"
            to={`/${link.node.slug}`}
            key={link.node.slug}
            tabIndex={-1}
            activeClassName="text-primary"
          >
            {link.node.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
