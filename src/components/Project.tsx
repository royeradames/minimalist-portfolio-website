// import library
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
// import data
import projectsDetail from "../projectsDetail";
import views from "../viewPortsSize";



const Project = (props: { project: string }) => {
  return <article className="project">Project {props.project}</article>;

export default Project;
