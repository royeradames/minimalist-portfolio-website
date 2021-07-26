import React from "react";

const Project = (props: { project: string }) => {
  return <article className="project">Project {props.project}</article>;
};

export default Project;
