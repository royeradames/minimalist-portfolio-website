import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Logo className="header__logo" />
        <nav className="header__nav">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
