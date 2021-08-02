import React from "react";
import { Link } from "react-router-dom";
const ContactMeArticle = (props: { page: string }) => {
  return (
    <article className={`contact-me ${props.page}__contact-me`}>
      <h2 className="title home__title contact-me__title">
        Interested in doing a project together?
      </h2>
      <div className="horizontal-line contact-me__horizontal-line" />
      <Link to="/contact">
        <button className="secondary-button secondary-normal ">
          Contact Me
        </button>
      </Link>
    </article>
  );
};

export default ContactMeArticle;
