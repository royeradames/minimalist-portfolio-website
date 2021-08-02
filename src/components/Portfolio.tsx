import React from "react";
import { Link } from "react-router-dom";
import viewPortsSize from "../views";
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
  return (
    <article className="portfolio">
      {portfolioList(projectSnipeDetails)}
      <ContactMeArticle page="portfolio" />
    </article>
  );
};

export default Portfolio;
