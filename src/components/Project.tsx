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

    return <></>;
  };
  return <article className="project"></article>;
};

export default Project;
