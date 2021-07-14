import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Router>
        <header className="header">
          <Logo className="header__logo" />
          <nav className="header__nav">
            <Link to="/">Home</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/contact">Contact Me</Link>
          </nav>
        </header>
      </Router>
    </>
  );
}

export default Header;
