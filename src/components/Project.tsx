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
        {/* unpack params identify project data for rendering */}
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
      </>
    );
  };
  return <article className="project"></article>;
};

export default Project;
