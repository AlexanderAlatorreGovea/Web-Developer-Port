import React from 'react';
import LandingPage from './LandingPage';
import Network from './Network';
import Projects from './Projects';
import ScrollToTop from './ScrollToTop';
import MainPage from './MainPage';

import './styles/_index.scss';
import { BrowserRouter, Route } from 'react-router-dom';



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
            <Route path="/" exact component={ LandingPage } />
            <Route path="/Network" exact component={ Network }/>
            <Route path="/Projects" exact component={ Projects }/>
            <Route path="/MainPage" exact component={ MainPage } />
          </ScrollToTop>
        </BrowserRouter>
        <div class="cursor"><span className="cursor--small"></span></div>
      </div>
    )
  }
}

export default App;

