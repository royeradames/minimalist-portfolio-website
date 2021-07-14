import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact Me</Link>
        </nav>
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
