import React from "react";
import selfie from "../images/homepage/mobile/image-homepage-profile.jpg";
import selfieTablet from "../images/homepage/tablet/image-homepage-profile.jpg";
import selfieDesktop from "../images/homepage/desktop/image-homepage-profile.jpg";
import homeHeroMobile from "../images/homepage/mobile/image-homepage-hero.jpg";
import homeHeroTable from "../images/homepage/tablet/image-homepage-hero.jpg";
import homeHeroDesktop from "../images/homepage/desktop/image-homepage-hero.jpg";
function Home() {
  const mobileView = "368w";
  const tabletView = "768w";
  const desktopView = "1440w";
  return (
    <>
      <main className="home">
        <article className="home__welcome-message welcome-message">
          <img
            src={homeHeroMobile}
            srcSet={`${homeHeroMobile} ${mobileView}, ${homeHeroTable} ${tabletView}, ${homeHeroDesktop} ${desktopView}`}
            alt="Mac desktop and laptopn on a table."
            className="home__hero"
          />
          <h1 className="home__welcome-message-title welcome-message__title">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <button className="home__welcome-message-button button welcome-message__button">
            About Me
          </button>
        </article>

        <article className="about-me">
          <img
            src={selfie}
            srcSet={`${selfie} 378w, ${selfieTablet} 768w, ${selfieDesktop} 1440w`}
            alt="Selfie"
            className="about-me__selfie"
          />
          <h2 className="about-me__title">About Me</h2>
          <p className="about-me__message">
            I’m a junior front-end developer looking for a new role in an
            exciting company. I focus on writing accessible HTML, using modern
            CSS practices and writing clean JavaScript. When writing JavaScript
            code, I mostly use React, but I can adapt to whatever tools are
            required. I’m based in London, UK, but I’m happy working remotely
            and have experience in remote teams. When I’m not coding, you’ll
            find me outdoors. I love being out in nature whether that’s going
            for a walk, run or cycling. I’d love you to check out my work.
          </p>
        </article>
        <article className="contact-me">
          <h2 className="contact-me__title">
            Go to Portfolio Interested in doing a project together?
          </h2>
          <button className="contact-me__button button">Contact Me</button>
        </article>
      </main>
    </>
  );
}

export default Home;
