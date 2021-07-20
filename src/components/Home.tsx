import React from "react";
import selfieMobile from "../images/homepage/mobile/image-homepage-profile.jpg";
import selfieTablet from "../images/homepage/tablet/image-homepage-profile.jpg";
import selfieDesktop from "../images/homepage/desktop/image-homepage-profile.jpg";
import homeHeroMobile from "../images/homepage/mobile/image-homepage-hero.jpg";
import homeHeroTable from "../images/homepage/tablet/image-homepage-hero.jpg";
import homeHeroDesktop from "../images/homepage/desktop/image-homepage-hero.jpg";
import { ReactComponent as DownArrow } from "../images/icons/down-arrows.svg";
import { Link } from "react-router-dom";

function Home() {
  // const [isButtonHover, setIsButtonHover] = useState(false)
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
          <h1 className="home__title welcome-message__title">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <button className="button button-primary-normal button-primary-normal ">
            <div className="button__icon-background button-primary-normal__background button-primary-normal__background">
              <DownArrow className="button__icon button-primary-normal__icon button-primary-normal__icon " />
            </div>
            <p className="button__text button-primary-normal__text button-primary-normal__text">
              About Me
            </p>
          </button>
        </article>

        <article className="home__about-me about-me">
          <img
            src={selfieMobile}
            srcSet={`
            ${selfieTablet} 768w, 
            ${selfieDesktop} 1440w, 
            ${selfieMobile} 368w,
                   `}
            alt="Selfie"
            className="home__selfie about-me__selfie"
          />
          <div className="home__horizontal-line home__horizontal-line-first about-me__horizontal-line" />

          <h2 className="home__title about-me__title">About Me</h2>
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
          <Link to="/portfolio" className="about-me__button">
            <button className="secondary-button secondary-normal ">
              go to portfolio
            </button>
          </Link>
          <div className="home__horizontal-line home__horizontal-line-last about-me__horizontal-line" />
        </article>
        <article className="home__contact-me contact-me">
          <h2 className="home__title contact-me__title">
            Interested in doing a project together?
          </h2>
          <Link to="contact" className="contact-me__button">
            <button className="secondary-button secondary-normal ">
              Contact Me
            </button>
          </Link>
        </article>
      </main>
    </>
  );
}

export default Home;
