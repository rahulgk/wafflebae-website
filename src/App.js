import React, { Component } from "react";
import { HashRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from "./components/Pages/HomePage";
import About from "./components/Pages/About";
import Menu from "./components/Pages/Menu";
import Gallery from "./components/Pages/Gallery";
import Franchise from "./components/Pages/Franchise";
import Franchiseform from "./components/Pages/FranchiseForm";
import Contact from "./components/Pages/Contact";

import "./App.scss";
import ScrollToTop from "./scrolltop";
import "./styles/default.scss";

class App extends Component {
  render() {
    return (
      <HashRouter>
        <ScrollToTop>
          <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Franchise" component={Franchise} />
            <Route exact path="/Franchiseform" component={Franchiseform} />
            <Route exact path="/Contact" component={Contact} />
          </div>
        </ScrollToTop>
      </HashRouter>
    );
  }
}

export default App;
