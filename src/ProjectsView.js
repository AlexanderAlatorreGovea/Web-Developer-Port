import React from 'react';
import ProjectViewTop from './ProjectViewTop';

import '/Users/test/test/src/styles/ProjectsView.scss';
import './styles/_item_grid.scss';

import { Link } from 'react-router-dom';



import listings from './assets/listings.jpg';
import restaurantfront from  './assets/restaurantfront.jpg';
import movie2 from './assets/movie2.jpg';
import emailtwo from './assets/emailtwo.jpg';
import dagency from './assets/dagency.png';

 
class ProjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allImgs : [
        { 
          title: 'Nexter',
          type: 'Real Estate',
          year: '2019',
          img: listings,
          client: 'private',
          technologies: 'react/sass',
          link: 'https://affectionate-hermann-7b18dd.netlify.com/',
          codelink: 'https://github.com/AlexanderAlatorreGovea/Real-state-website'
       },
       { 
        title: 'The Movie Bonanza',
        type: 'Movie Theater',
        year: '2019',
        img: movie2,
        client: 'private',
        technologies: 'react/redux',
        link: 'https://moviebonanzadb.com',
        codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
      },
       { 
          title: 'The Steak House',
          type: 'Restaurant',
          year: '2019',
          img: restaurantfront,
          client: 'private',
          technologies: 'react',
          link: 'https://steakhouserestaurant.net',
          codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
        },
        { 
          title: 'Hero Lets You',
          type: 'Email',
          year: '2019',
          img: emailtwo,
          client: 'private',
          technologies: 'HTML email',
          link: 'https://alexanderalatorregovea.github.io/Email.html/',
          codelink: 'https://github.com/AlexanderAlatorreGovea/Email.html'
       },
       { 
        title: 'D Agency',
        type: 'Digital Agency',
        year: '2019',
        img: dagency,
        client: 'private',
        technologies: 'HTML Bootsrap',
        link: 'https://alexanderalatorregovea.github.io/Digital-agency-m/',
        codelink: 'https://github.com/AlexanderAlatorreGovea/Digital-agency-m'
       },
       { 
        title: 'Nexter',
        type: 'Real Estate',
        year: '2019',
        img: listings,
        client: 'private',
        technologies: 'react/sass',
        link: 'https://affectionate-hermann-7b18dd.netlify.com/',
        codelink: 'https://github.com/AlexanderAlatorreGovea/Real-state-website'
     },
     { 
      title: 'The Movie Bonanza',
      type: 'Movie Theater',
      year: '2019',
      img: movie2,
      client: 'private',
      technologies: 'react/redux',
      link: 'https://moviebonanzadb.com',
      codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
    },
     { 
        title: 'The Steak House',
        type: 'Restaurant',
        year: '2019',
        img: restaurantfront,
        client: 'private',
        technologies: 'react',
        link: 'https://steakhouserestaurant.net',
        codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
      },
      { 
        title: 'Hero Lets You',
        type: 'Email',
        year: '2019',
        img: emailtwo,
        client: 'private',
        technologies: 'HTML email',
        link: 'https://alexanderalatorregovea.github.io/Email.html/',
        codelink: 'https://github.com/AlexanderAlatorreGovea/Email.html'
     },
     { 
      title: 'D Agency',
      type: 'Digital Agency',
      year: '2019',
      img: dagency,
      client: 'private',
      technologies: 'HTML Bootsrap',
      link: 'https://alexanderalatorregovea.github.io/Digital-agency-m/',
      codelink: 'https://github.com/AlexanderAlatorreGovea/Digital-agency-m'
     },
     { 
      title: 'Nexter',
      type: 'Real Estate',
      year: '2019',
      img: listings,
      client: 'private',
      technologies: 'react/sass',
      link: 'https://affectionate-hermann-7b18dd.netlify.com/',
      codelink: 'https://github.com/AlexanderAlatorreGovea/Real-state-website'
   },
   { 
    title: 'The Movie Bonanza',
    type: 'Movie Theater',
    year: '2019',
    img: movie2,
    client: 'private',
    technologies: 'react/redux',
    link: 'https://moviebonanzadb.com',
    codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
  },
   { 
      title: 'The Steak House',
      type: 'Restaurant',
      year: '2019',
      img: restaurantfront,
      client: 'private',
      technologies: 'react',
      link: 'https://steakhouserestaurant.net',
      codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
    },
    { 
      title: 'Hero Lets You',
      type: 'Email',
      year: '2019',
      img: emailtwo,
      client: 'private',
      technologies: 'HTML email',
      link: 'https://alexanderalatorregovea.github.io/Email.html/',
      codelink: 'https://github.com/AlexanderAlatorreGovea/Email.html'
   },
   { 
    title: 'D Agency',
    type: 'Digital Agency',
    year: '2019',
    img: dagency,
    client: 'private',
    technologies: 'HTML Bootsrap',
    link: 'https://alexanderalatorregovea.github.io/Digital-agency-m/',
    codelink: 'https://github.com/AlexanderAlatorreGovea/Digital-agency-m'
    },
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
              <div className="top-section-bottom-container" id="projects">
                <h2 className="number-2">2</h2>
                  <h1>projects.</h1>
                    <div className="arrow">
                      <i id="arrow-left-l" style={{ color: 'black'}} onClick={this.prevBtn} class="green big arrow alternate circle left outline icon"></i>
                      <i id="arrow-right-r" style={{ color: 'black'}}  onClick={this.nextBtn.bind(null, this.state.index)} class="green big arrow alternate circle right outline icon"></i>
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
                              <div className="project-box" key={index} style={{background: `url("${info.img}") no-repeat`, backgroundSize: 'contain'}} >
                                <div className="grey-bg">
                                  <div className="project-info">
                                    <div className="project-details">
                                      for more info click the arrow / Type: {info.type}
                                    </div>
                                    <div className="project-title">
                                      {info.title} 
                                    </div>
                                    <div><Link to="/Projects" ><i class="long arrow alternate right icon"></i></Link></div>
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
                        <div className="title-wrapper">
                          <div className="titles"
                              style={{
                                transform: `translateX(${this.state.translateValue}px)`,
                                transition: 'transform ease-out 0.45s'
                                }}
                              >
                              {this.state.allImgs.map((info, index) => {
                              return(
                                <div className="project-title-one general-title">
                                  <h3 className="header-description"> <a href={info.link} target="_blank"> {info.title} / Jump to the website</a></h3>
                                  <h4 className="header-description"><a href={info.codelink} target="_blank"> see the code </a></h4>
                                </div>
                              )
                              })} 
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


