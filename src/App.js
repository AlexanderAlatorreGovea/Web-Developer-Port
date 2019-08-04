import React from 'react';
import Home from './Home';
import LandingPage from './LandingPage';
import Network from './Network';
import Projects from './Projects';
import Wrapper from './Wrapper';
import SideDrawer from './SideDrawer';
import ScrollToTop from './ScrollToTop';

import './styles/_index.scss';
import { BrowserRouter, Route, Link } from 'react-router-dom';



class App extends React.Component {
  
  componentDidMount() {
    const cursor = document.querySelector('.cursor');

    document.addEventListener('mousemove', e => {
        cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
    })

    document.addEventListener('click', () => {
        cursor.classList.add("expand");

        setTimeout(() => {
            cursor.classList.remove("expand"); 
        }, 500)
    }) 
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <ScrollToTop>
            <Route path="/Home" exact component={ Home } />
            <Route path="/" exact component={ LandingPage } />
            <Route path="/Network" exact component={ Network }/>
            <Route path="/Projects" exact component={ Projects }/>
          </ScrollToTop>
        </BrowserRouter>
        <div class="cursor"><span className="cursor--small"></span></div>
      </div>
    )
  }
}

export default App;

