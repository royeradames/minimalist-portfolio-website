import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../images/logo.svg";
import Nav from "./Nav";
import SocialMedia from "./SocialMedia";
function Footer() {
  return (
    <>
      <footer className="footer">
        <Link
          to="/"
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <Logo className="footer__logo" />
        </Link>
        <Nav footer="footer" />
        <SocialMedia page="footer" />
      </footer>
    </>
  );
}

export default Footer;
