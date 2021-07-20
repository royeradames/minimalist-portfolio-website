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
        <Nav />
        <a href="https://github.com/royeradames">
          <Github className="footer__icon footer__github" />
        </a>
        <a href="#root">
          <Twitter className="footer__icon footer__twitter" />
        </a>
        <a href="https://www.linkedin.com/in/royer-adames/">
          <Linkedin className="footer__icon footer__linkedin" />
        </a>
      </footer>
    </>
  );
}

export default Footer;
