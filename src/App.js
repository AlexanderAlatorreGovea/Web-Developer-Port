import React from 'react';
import Home from './Home';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Project from './Project';
import ProjectsView from './ProjectsView.js';
import LandingPage from './LandingPage';
import Network from './Network'
import ContactPage from './ContactPage'


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/Home" exact component={Home} />
          <Route path="/LandingPage" exact component={LandingPage} />
          <Route path="/Network" exact component={Network}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
