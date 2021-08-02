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

    return <></>;
  };
  return <article className="project"></article>;
};

export default Project;
