import React from "react";
import { Link } from "react-router-dom";
import mediaQueries from "../viewPortsSize";
import {
  projectSnipeDetails,
  ProjectSnipeDetails,
} from "../projectSnipeDetails";
// component
import ContactMeArticle from "../components/ContactMeArticle";

const Portfolio = () => {
  const pattern = (id: number) => {
    const even = id % 2 === 0;
    if (even) {
      return "portfolio__project-even-pattern";
    } else {
      // odd
      return "portfolio__project-odd-pattern";
    }
  };

  const portfolioList = (projectSnipeDetails: ProjectSnipeDetails) => {
    return projectSnipeDetails.map((project: ProjectSnipeDetails[0]) => {
      return (
        <article
          className={`portfolio__project ${pattern(project.id)}`}
          key={project.id}
        >
          {/* show the images depending on the sizes, and the px density */}
          <picture className="portfolio__img">
            <source
              srcSet={`${project.imgLinkDesktop} 1x, ${project.imgLinkDesktop2x} 2x`}
              media={mediaQueries.desktop}
            />
            <source
              srcSet={`${project.imgLinkTablet} 1x, ${project.imgLinkTablet2x} 2x`}
              media={mediaQueries.tablet}
            />
            <source
              srcSet={`${project.imgLinkMobile} 1x, ${project.imgLinkMobile2x}`}
            />
            <img src={project.imgLinkMobile} alt={`${project.title} project`} />
          </picture>
          <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-top" />
          <h1 className="title portfolio__title">{project.title}</h1>
          <p className="portfolio__message">{project.message}</p>
          <Link
            to={`projects/${project.id}/${project.title}`}
            className="portfolio__button-link"
          >
            <button className="secondary-button secondary-normal portfolio__button">
              View Project
            </button>
          </Link>
          <div className="horizontal-line portfolio__horizontal-line portfolio__horizontal-line-bottom" />
        </article>
      );
    });
  };
  return (
    <main className="website__pages portfolio">
      {portfolioList(projectSnipeDetails)}
      <ContactMeArticle page="portfolio" />
    </main>
  );
};

export default Portfolio;
