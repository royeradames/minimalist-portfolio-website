import React from "react";
import "./css/main.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <main>
      <Router>
        <Header />
        <Switch>
          <Route path="/portfolio">{/* <Home /> */}</Route>
          <Route path="/contact">{/* <Home /> */}</Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </main>
  );
}

export default App;
