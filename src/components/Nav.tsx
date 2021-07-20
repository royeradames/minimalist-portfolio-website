import React from "react";
import { Link } from "react-router-dom";

const Nav = (props: any) => {
  return (
    <nav className={`nav ${props.menu}`}>
      <Link to="/" className="nav__link">
        Home
      </Link>
      <Link to="/portfolio" className="nav__link">
        Portfolio
      </Link>
      <Link to="/contact" className="nav__link">
        Contact Me
      </Link>
    </nav>
  );
};

export default Nav;
