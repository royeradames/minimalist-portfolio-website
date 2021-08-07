import React, { useState } from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Hamburger } from "../images/icons/hamburger.svg";
import { ReactComponent as Close } from "../images/icons/close.svg";
import { Link } from "react-router-dom";
import Nav from "./Nav";
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
      <header className="website__header header">
        <Link to="/">
          <Logo />
        </Link>
        <Hamburger
          className={`header__hamburger ${isMenuOpen ? "header__hide" : ""}`}
          onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
        />
        <Close
          className={`header__close ${isMenuOpen ? "" : "header__hide"}`}
          onClick={() => mobileMenuLogic(isMenuOpen, setIsMenuOpen)}
        />
        <Nav menu={`header__nav ${isMenuOpen ? " header__open" : ""}`} />
      </header>
    </>
  );
}

export default Header;
