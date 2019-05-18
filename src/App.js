import React from 'react';
import Home from './Home';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Project from './Project'
import ProjectsView from './ProjectsView.js'



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact component={Home} />
          <Route path="/Projects" exact component={Project} />
          <Route path="/ProjectsView" exact component={ProjectsView} />
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
