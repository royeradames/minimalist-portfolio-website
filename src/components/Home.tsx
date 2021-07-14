import React from "react";

function Home() {
  return (
    <>
      <main className="home">
        <article className="home__welcome-message">
          <h1 className="home__welcome-message-title">
            Hey, I’m Alex Spencer and I love building beautiful websites
          </h1>

          <button className="home__welcome-message-button button">
            About Me
          </button>
        </article>
        <article className="about-me">
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
