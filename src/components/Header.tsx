import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icons/hamburger.svg";
import { ReactComponent as Close } from "../images/icons/close.svg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <Logo className="header__logo" />
        <Hamburger className="header__hamburger" />
        <Close className="header__close" />
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
