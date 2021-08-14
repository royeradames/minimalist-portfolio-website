// libraries
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// styles
import "./css/main.scss";

// components
import Header from "./components/Header";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <article className="website">
      <Router>
        <Header />
        <Switch>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/projects/:id/:title">
            {/* Render the project information base on the project title */}
            <Project />
          </Route>
          <Route path="/contact">
            <ContactForm />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </article>
  );
}

export default App;
