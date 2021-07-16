import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icons/hamburger.svg";
import { ReactComponent as Close } from "../images/icons/close.svg";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const mobileMenuLogic = (
    isMenuOpen: boolean,
    setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // hide and show hambur, close icons and menu links
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <header className="header">
        <Link to="/">
          <Logo className="header__logo" />
        </Link>
        <Hamburger
          className={`header__hamburger ${isMenuOpen ? "header__hide" : ""}`}
          onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
        />
        <Close
          className={`header__close ${isMenuOpen ? "" : "header__hide"}`}
          onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
        />
        <nav className={`header__nav ${isMenuOpen ? " header__open" : ""}`}>
          <Link className="header__nav-link" to="/">
            Home
          </Link>
          <Link
            className="header__nav-link header__nav-link-portfolio"
            to="/portfolio"
          >
            Portfolio
          </Link>
          <Link className="header__nav-link" to="/contact">
            Contact Me
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
