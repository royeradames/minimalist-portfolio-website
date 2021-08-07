// libraries
import React from "react";
import { ReactComponent as DownArrow } from "../images/icons/down-arrows.svg";
import { Link } from "react-router-dom";

// images
import selfieMobile from "../images/homepage/mobile/image-homepage-profile.jpg";
import selfieMobile2x from "../images/homepage/mobile/image-homepage-profile@2x.jpg";
import selfieTablet from "../images/homepage/tablet/image-homepage-profile.jpg";
import selfieTablet2x from "../images/homepage/tablet/image-homepage-profile@2x.jpg";
import selfieDesktop from "../images/homepage/desktop/image-homepage-profile.jpg";
import selfieDesktop2x from "../images/homepage/desktop/image-homepage-profile@2x.jpg";
import homeHeroMobile from "../images/homepage/mobile/image-homepage-hero.jpg";
import homeHeroMobile2x from "../images/homepage/mobile/image-homepage-hero@2x.jpg";
import homeHeroTable from "../images/homepage/tablet/image-homepage-hero.jpg";
import homeHeroTable2x from "../images/homepage/tablet/image-homepage-hero@2x.jpg";
import homeHeroDesktop from "../images/homepage/desktop/image-homepage-hero.jpg";
import homeHeroDesktop2x from "../images/homepage/desktop/image-homepage-hero@2x.jpg";

// components
import ConctactMeArticle from "./ContactMeArticle";

// variables
import mediaQueries from "../viewPortsSize";

function Home() {
  return (
    <>
      <article className="home">
        <article className="home__welcome-message welcome-message">
          <img
            src={homeHeroMobile}
            srcSet={`${homeHeroMobile} ${viewPortsSize.mobile}, ${homeHeroTable} ${viewPortsSize.tablet}, ${homeHeroDesktop} ${viewPortsSize.desktop}`}
            alt="Mac desktop and laptopn on a table."
            className="home__hero welcome-message__hero"
          />
          <div className="welcome-message__call-to-action">
            <h1 className="title home__title welcome-message__title">
              Hey, I’m Alex Spencer and I love building beautiful websites
            </h1>
            <a href="#about">
              <button className="button button-primary-normal button-primary-normal ">
                <div className="button__icon-background button-primary-normal__background button-primary-normal__background">
                  <DownArrow className="button__icon button-primary-normal__icon button-primary-normal__icon " />
                </div>
                <p className="button__text button-primary-normal__text button-primary-normal__text">
                  About Me
                </p>
              </button>
            </a>
          </div>
        </article>

        <article className="home__about-me about-me" id="about">
          <img
            srcSet={`
            ${selfieMobile} ${viewPortsSize.mobile},
            ${selfieTablet} ${viewPortsSize.tablet}, 
            ${selfieDesktop} ${viewPortsSize.desktop}, 
                   `}
            src={selfieMobile}
            alt="Selfie"
            className="home__selfie about-me__selfie"
          />
          <div className="horizontal-line horizontal-line-first about-me__horizontal-line about-me__horizontal-line-top" />
          <h2 className="title home__title about-me__title">About Me</h2>
          <p className="home__message about-me__message">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
          <Link to="/portfolio" className="about-me__button-link">
            <button className="secondary-button secondary-normal ">
              go to portfolio
            </button>
          </Link>
          <div className="horizontal-line horizontal-line-last about-me__horizontal-line about-me__horizontal-line-bottom" />
        </article>
        <ConctactMeArticle page="home" />
      </article>
    </>
  );
}

export default Home;
