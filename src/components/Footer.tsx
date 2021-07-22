import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
function Footer() {
  return (
    <>
      <footer className="footer">
        <Link to="/">
          <Logo className="footer__logo" />
        </Link>
        <Nav footer="footer" />
        <SocialMedia footer="footer" />
      </footer>
    </>
  );
}

export default Footer;
