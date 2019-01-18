import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from  'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Homepage from './components/pages/homePage';
import About from './components/pages/about';
import Menu from './components/pages/menu';
import Gallery from './components/pages/gallery';
import Franchise from './components/pages/franchise';
import Contact from './components/pages/contact';

import './App.scss';
import './styles/default.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
            <Route exact path="/" component={Homepage} />
            <Route exact path="/About" component={About} />
            <Route exact path="/Menu" component={Menu} />
            <Route exact path="/Gallery" component={Gallery} />
            <Route exact path="/Franchise" component={Franchise} />
            <Route exact path="/Contact" component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
