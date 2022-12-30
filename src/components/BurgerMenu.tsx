import { Link } from "gatsby";
import React from "react";
import { LinkType } from "../types/linkType";

// type for the props
type Props = {
  links: LinkType[];
};

function BurgerMenu(props: Props) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div className="burger-menu">
      <button onClick={toggleMenu}>{isMenuOpen ? "Close" : "Menu"}</button>
      {isMenuOpen && (
        <ul>
          {props.links.map((item: LinkType) => (
            <li key={item.title}>
              <Link to={item.url}>{item.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BurgerMenu;
