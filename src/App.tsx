import React, { useState } from "react";
import "./css/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Header from "./components/Header";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import Project from "./components/Project";
function App() {
  const [project, setProject] = useState("");

  return (
    <main className="main-content">
      <Router>
        <div className="header-content-wrap">
          <Header />
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path={`/project-${project}`}>
              {/* Render the project information base on the project title */}
              <Project project={project} />
            </Route>
            <Route path="/contact">{/* <Home /> */}</Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
