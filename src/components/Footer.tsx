import React from "react";
import { ReactComponent as Logo } from "../images/logo.svg";
import { ReactComponent as Github } from "../images/icons/github.svg";
import { ReactComponent as Twitter } from "../images/icons/twitter.svg";
import { ReactComponent as Linkedin } from "../images/icons/linkedin.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <Logo className="footer__logo" />
        <nav className="footer__nav">
          <a href="#root">Home</a>
          <a href="#root">Portfolio</a>
          <a href="#root">Contact Me</a>
        </nav>
        <Github className="footer__icon footer__github" />
        <Twitter className="footer__icon footer__twitter" />
        <Linkedin className="footer__icon footer__linkedin" />
      </footer>
    </>
  );
}

export default Footer;
