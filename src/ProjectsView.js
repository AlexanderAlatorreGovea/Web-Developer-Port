import React from 'react';
import ProjectViewTop from './ProjectViewTop';

import '/Users/test/test/src/styles/ProjectsView.scss';
import './styles/_item_grid.scss';

import { Link } from 'react-router-dom';

import globalState from './assets/globalState/globalState';

import email from './assets/email.jpg';
import emailbottom from  './assets/emailbottom.jpg';
import menu from './assets/menu.jpg';
import movies from './assets/movies.jpg';
import listings from './assets/listings.jpg';
import restaurantfront from  './assets/restaurantfront.jpg';
import movie2 from './assets/movie2.jpg';
import movies3 from './assets/movies3.jpg';
import emailtwo from './assets/emailtwo.jpg';
 
class ProjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       allImgs: [
        menu,
        movies3,
        restaurantfront,
        listings,
        movie2,
        emailtwo,
        restaurantfront,
        listings,
        movie2,
        emailtwo,
        movie2,
        emailtwo,
        restaurantfront,
        listings,
        movie2,
        emailtwo 
      ],
      allImgs : [
        { 
           title: 'The Movie Bonanza',
           type: 'Movie Theater',
           year: '2019',
           img: movie2,
           client: 'private',
           technologies: 'react/redux'
        },
        { 
          title: 'Nexter',
          type: 'Real Estate',
          year: '2019',
          img: listings,
          client: 'private',
          technologies: 'react/sass'
       },
       { 
          title: 'The Steak House',
          type: 'Restaurant',
          year: '2019',
          img: restaurantfront,
          client: 'private',
          technologies: 'react'
        },
        { 
          title: 'Hero Lets You',
          type: 'Email',
          year: '2019',
          img: emailtwo,
          client: 'private',
          technologies: 'HTML email'
       },
       { 
        title: 'The Movie Bonanza',
        type: 'Movie Theater',
        year: '2019',
        img: movie2,
        client: 'private',
        technologies: 'react/redux'
     },
     { 
       title: 'Nexter',
       type: 'Real Estate',
       year: '2019',
       img: listings,
       client: 'private',
       technologies: 'react/sass'
    },
    { 
       title: 'The Steak House',
       type: 'Restaurant',
       year: '2019',
       img: restaurantfront,
       client: 'private',
       technologies: 'react'
     },
     { 
       title: 'Hero Lets You',
       type: 'Email',
       year: '2019',
       img: emailtwo,
       client: 'private',
       technologies: 'HTML email'
    }
    ],
      revealImage: false,
      translateValue: 0,
      index: 0
    }
  }

      nextBtn = () => {
        if(this.state.index === this.state.allImgs.length - 1) {
          return this.setState({
            index: 0,
            translateValue: 0
          })
        }
        
        this.setState(prevState => ({
          index: prevState.index + 1,
          translateValue: prevState.translateValue + -(this.slideWidth())
        }));
      }


    prevBtn = () => {
    const carousel = document.querySelectorAll('.carousel__item:nth-child(1)')
    
      this.setState(prevState => ({
        translateValue: prevState.translateValue + this.slideWidth()
      }))
      if(this.state.index +  5) {
        this.setState(prevState => ({
          translateValue: 0
        }))
      }
  }

  slideWidth = () => {
    return document.querySelector('.project-box').clientWidth
   }

   componentDidMount() {
     const carousel = document.querySelector('.js-carousel-list').children
     console.log(carousel)
  
    document.querySelector('.number-2').classList.add('animated', 'fadeInUp', 'delay-3s')
    
}

  componentWillUnmount() {
    document.querySelector('.number-2').classList.remove('animated', 'fadeInUp', 'delay-3s');
}

  

  render() {
  return (
      <div style={{background: 'white', marginBottom: '40px'}}> 
      <div className="main-container">

      <ProjectViewTop />

        <div className="bottom-container">
          <div 
          className="top-section-bottom-container" id="projects">
          <h2 className="number-2">2</h2>
            <h1>projects.</h1>
              <div className="arrow">
                <i onClick={this.prevBtn} class="green big arrow alternate circle left outline icon"></i>
                <i onClick={this.nextBtn.bind(null, this.state.index)} class="green big arrow alternate circle right outline icon"></i>
          </div>

              
              <div class="carousel js-carousel">
                <div class="carousel__container js-carousel-container animated fadeInRight "
                  >
                  <div class="carousel__list js-carousel-list"
                    style={{
                      transform: `translateX(${this.state.translateValue}px)`,
                      transition: 'transform ease-out 0.45s'
                    }}>

                     {/*item 4*/}

                    {this.state.allImgs.map((info, index) => {
                      return(
                      <div className="slide">
                        <div className="project-section" >
                          <div className="project-box" key={index} style={{background: `url("${info.img}") no-repeat`, width: '400px', height: '350px', backgroundSize: 'contain'}} >
                            <div className="grey-bg">
                              <div className="project-info">
                                <div className="project-details">
                                  Client: {info.client} Year: {info.year} Type: {info.type}
                                </div>
                                <div className="project-title">
                                  {info.title}
                                </div>
                                <div><i class="long arrow alternate right icon"></i></div>
                              </div>
                            </div>
                          </div>
                      </div>
                    </div>
                    )
                    })}                  
                     </div>
                      </div>
                      </div>
                      </div>

                      <div className="title-containter">
                      <div className="title-wrapper"
                      >
                      <div className="titles"
                          style={{
                            transform: `translateX(${this.state.translateValue}px)`,
                            transition: 'transform ease-out 0.45s'
                            }}
                        >
                          {this.state.allImgs.map((info, index) => {
                          return(
                            <div className="project-title-one general-title">
                              <h3 className="header-description">{info.title}</h3>
                              <h4 className="header-description">{info.technologies}</h4>
                            </div>
                          )
                          })} 
                        <div className="project-title-one general-title">
                            <h3 className="header-description">Movie Theater Website</h3>
                            <h4 className="header-description">created with react</h4>
                          </div>

                          <div className="project-title-two general-title">
                            <h3 className="header-description">Movie Theater Website</h3>
                            <h4 className="header-description">created with react</h4>
                          </div>

                          <div className="project-title-three general-title">
                            <h3 className="header-description">Movie Theater Website</h3>
                            <h4 className="header-description">created with react</h4>
                          </div>

                          <div className="project-title-four general-title">
                            <h3 className="header-description">Movie Theater Website</h3>
                            <h4 className="header-description">created with react</h4>
                          </div>

                          <div className="project-title-five general-title">
                            <h3 className="header-description">Movie Theater Website</h3>
                            <h4 className="header-description">created with react</h4>
                        </div>
                      </div>
                      </div>

                      </div>
 
                <div className="button">
                  <Link to="/Projects" >
                    <button class="ui primary button wow fadeInLeft">view all projects</button>
                  </Link>
                </div>
        </div>
      </div>
      </div>
  )
}
}

export default ProjectsView;


