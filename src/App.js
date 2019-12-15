import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home' 
import bgimage from './images/bg1.png'   
import About from './components/About';
import Gallery from './components/Gallery'
import Bikaner from './components/Bikaner'
import Reservation from './components/Reservation' 
import Contact from './components/Contact' 
function App() {
  return (
    <Router>
      <div style={{backgroundImage: `url(${bgimage})` }}>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/gallery">
            <Gallery />
          </Route>
          <Route exact path="/bikaner">
            <Bikaner />
          </Route>
          <Route exact path="/reservation">
            <Reservation />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        </div>
    </Router>
  );
}

export default App;
