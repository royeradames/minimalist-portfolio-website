import React from "react";
import { Link } from "react-router-dom";
const ContactMeArticle = () => {
  return (
    <article className="home__contact-me contact-me">
      <h2 className="home__title contact-me__title">
        Interested in doing a project together?
      </h2>
      <div className="home__horizontal-line contact-me__horizontal-line" />
      <Link to="contact" className="contact-me__button">
        <button className="secondary-button secondary-normal ">
          Contact Me
        </button>
      </Link>
    </article>
  );
};

export default ContactMeArticle;
