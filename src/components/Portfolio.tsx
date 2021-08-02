import React from "react";
import { Link } from "react-router-dom";
import viewPortsSize from "../viewPortsSize";
import projectSnipeDetails from "../projectSnipeDetails";
// component
import ContactMeArticle from "./ContactMeArticle";

type DataStructure = {
  id: number;
  title: string;
  message: string;
  imgLinkMobile: string;
  imgLinkTablet: string;
  imgLinkDesktop: string;
}[];
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

  const portfolioList = (projectSnipeDetails: DataStructure) => {
    return projectSnipeDetails.map(
      (project: {
        id: number;
        imgLinkMobile: string;
        imgLinkTablet: string;
        imgLinkDesktop: string;
        title: string;
        message: string;
      }) => {
        return (
          <article
            className={`portfolio__project ${pattern(project.id)}`}
            key={project.id}
          >
            <img
              src={project.imgLinkMobile}
              srcSet={`${project.imgLinkMobile} ${viewPortsSize.mobile}, ${project.imgLinkTablet} ${viewPortsSize.tablet}, ${project.imgLinkDesktop} ${viewPortsSize.desktop}`}
              alt={`${project.title} project`}
              className="portfolio__img"
            />
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
      }
    );
  };
  return (
    <article className="portfolio">
      {portfolioList(projectSnipeDetails)}
      <ContactMeArticle page="portfolio" />
    </article>
  );
};

export default Portfolio;
