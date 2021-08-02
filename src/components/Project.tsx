// import library
import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";




const Project = (props: { project: string }) => {
  return <article className="project">Project {props.project}</article>;

export default Project;
