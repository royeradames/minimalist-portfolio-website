// import library
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import data
import projectsDetail from "../projectsDetail";
import views from "../viewPortsSize";
// import components
import ContactMeArticle from "./ContactMeArticle";
// import IVGs
import { ReactComponent as LeftArrow } from "../images/icons/arrow-left.svg";
import { ReactComponent as RightArrow } from "../images/icons/arrow-right.svg";

const Project = () => {
  // get url params to identify the project
  const { id, title } = useParams<{ id: string; title: string }>();
  // convert the id from a strin to a number
  const currentProjectId = parseInt(id);

  const projectDetails = () => {
    // current project data
    const currentProjectArrayId = currentProjectId - 1;
    const currentProjectDetail = projectsDetail[currentProjectArrayId];

    // previous project data
    let previousProjectTitleGetter;
    if (currentProjectId - 2 >= 0) {
      previousProjectTitleGetter = projectsDetail[currentProjectId - 2];
    } else {
      const lastProject = projectsDetail.length - 1;
      previousProjectTitleGetter = projectsDetail[lastProject];
    }
    const previousProjectDetail = previousProjectTitleGetter;

    // previous project data
    let nextProjectTitleGetter;
    const nextProjectArrayId = currentProjectId;
    if (nextProjectArrayId < projectsDetail.length) {
      nextProjectTitleGetter = projectsDetail[nextProjectArrayId];
    } else {
      const firstProjectId = 0;
      nextProjectTitleGetter = projectsDetail[firstProjectId];
    }
    const nextProjectDetail = nextProjectTitleGetter;

    return (
      <>
        {/* unpack project data identify by params */}
        <img
          src={currentProjectDetail.heroMobile}
          srcSet={`${currentProjectDetail.heroMobile} ${views.mobile}, ${currentProjectDetail.heroTablet} ${views.tablet}, ${currentProjectDetail.heroDesktop} ${views.desktop}`}
          alt={`Desktop preview of the ${title} project`}
          className="project__hero"
        />
        <article className="project__intro intro">
          <div className="horizontal-line intro__horizontal-line-top" />
          <h1 className="title  intro__title">{currentProjectDetail.title}</h1>
          <p className="project__message project__intro-message intro__message">
            {currentProjectDetail.intro}
          </p>
          <div className="intro__job-title-tech-stack">
            <p className="intro__job-title">{currentProjectDetail.jobTitle}</p>
            <p className="intro__tech-stack">
              {currentProjectDetail.techStack}
            </p>
          </div>
          <button className="secondary-button secondary-normal intro__button">
            VIEW WEBSITE
          </button>
          <div className="horizontal-line intro__horizontal-line-bottom" />
        </article>
        <article className="project__background background">
          <h2 className="project__title background__title">
            Project Background
          </h2>
          <p className="project__message background__message">
            {currentProjectDetail.background}
          </p>
        </article>
        <article className="project__previews previews">
          <h2 className="project__title previews__title">Static Previews</h2>
          <img
            src={currentProjectDetail.imgMobilePreview}
            srcSet={`${currentProjectDetail.imgMobilePreview} ${views.mobile}, ${currentProjectDetail.imgTabletPreview} ${views.tablet}, ${currentProjectDetail.imgDesktopPreview} ${views.desktop}`}
            alt={`Desktop preview of ${currentProjectDetail.title} project`}
            className="previews__preview-1"
          />
          <img
            src={currentProjectDetail.imgMobile2Preview}
            srcSet={`${currentProjectDetail.imgMobile2Preview} ${views.mobile}, ${currentProjectDetail.imgTablet2Preview} ${views.tablet}, ${currentProjectDetail.imgDesktop2Preview} ${views.desktop}`}
            alt={`Mobile preview of ${currentProjectDetail.title} project`}
            className="previews__preview-2"
          />
        </article>
        <article className="project__others-project other-project">
          {/* Link to previous and next projects on the project list */}
          <Link
            to={`/projects/${previousProjectDetail.id}/${previousProjectDetail.title}`}
            className="other-project__previous-project-link"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <button className="other-project__previous-project other-project__button">
              <LeftArrow className="other-project__button-icon other-project__previous-project-icon" />
              <h2
                className="project__title
              other-project__button-title
              other-project__previous-project-title "
              >
                {previousProjectDetail.title}
              </h2>
              <h2 className="other-project__label other-project__button-label other-project__previous-project-label">
                Previous Project
              </h2>
            </button>
          </Link>
          <Link
            to={`/projects/${nextProjectDetail.id}/${nextProjectDetail.title}`}
            className="other-project__next-project-link"
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <button className="other-project__next-project other-project__button">
              <RightArrow className="other-project__button-icon other-project__next-project-icon" />
              <h2 className="project__title other-project__button-title other-project__next-project-title ">
                {nextProjectDetail.title}
              </h2>
              <h2 className="other-project__label other-project__button-label other-project__next-project-label">
                Next Project
              </h2>
            </button>
          </Link>
        </article>
      </>
    );
  };
  return (
    <article className="project">
      {projectDetails()}
      <ContactMeArticle page="project" />
    </article>
  );
};

export default Project;
