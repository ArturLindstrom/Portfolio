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
    }
  `);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const sideMenu = React.useRef<HTMLDivElement>(null);

  function toggleMenu() {
    if (menuOpen !== true) {
      console.log("menu is open");
      sideMenu?.current?.classList.remove("right-[-250px]");
      sideMenu?.current?.classList.add("right-0");
      setMenuOpen(!menuOpen);
    } else {
      sideMenu?.current?.classList.remove("right-0");
      sideMenu?.current?.classList.add("right-[-250px]");
      setMenuOpen(!menuOpen);
    }
  }

  return (
    <div>
      <span className="text-4xl cursor-pointer" onClick={() => toggleMenu()}>
        &#9776;
      </span>
      <div
        ref={sideMenu}
        id="side-menu"
        className="fixed top-0 right-[-250px] w-[240px] h-screen z-50 bg-slate-800 p-5
      flex flex-col space-y-5 text-white duration-300"
      >
        <span
          className="text-4xl text-right cursor-pointer"
          onClick={() => toggleMenu()}
        >
          &times;
        </span>
        <Link className="transition-all duration-300 hover:text-primary" to="/">
          Home
        </Link>
        <Link
          className="hover:text-primary transition-all-duration-300"
          to="/projects"
        >
          Projects
        </Link>
        <Link
          className="hover:text-primary transition-all-duration-300"
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className="hover:text-primary transition-all-duration-300"
          to="/about"
        >
          About
        </Link>
        {data.allContentfulPage.edges.map((link: DynamicLinkType) => (
          <Link
            className="hover:text-primary"
            to={`/${link.node.slug}`}
            key={link.node.slug}
          >
            {link.node.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
