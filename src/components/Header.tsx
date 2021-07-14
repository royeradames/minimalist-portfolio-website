import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
function Header() {
  return (
    <>
      <header className="header">
        <Logo className="header__logo" />
        <nav className="header__nav">
          <a href="#root">Home</a>
          <a href="#root">Portfolio</a>
          <a href="#root">Contact Me</a>
        </nav>
      </header>
    </>
  );
}

export default Header;
