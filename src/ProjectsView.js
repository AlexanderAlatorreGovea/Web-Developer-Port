import '/Users/test/test/src/styles/ProjectsView.scss';
import React from 'react';
import ProjectViewTop from './ProjectViewTop';
import LandingPage from './LandingPage'




class ProjectsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       allImgs: [
        "https://cdn.dribbble.com/users/1343667/screenshots/5265526/showcase_2x.png",
        "http://www.moneygossips.com/wp-content/uploads/2015/02/free-movie-sites-810x539.png",
        "http://www.moneygossips.com/wp-content/uploads/2015/02/free-movie-sites-810x539.png",
        "https://cdn.dribbble.com/users/903897/screenshots/6461891/shot.png",
        "https://cdn.dribbble.com/users/515185/screenshots/6469560/shot-cropped-1557605297901.png"
     
      ],
      revealImage: false,
      translateValue: 0,
      index: 0
    }
    this.imageRef = React.createRef();
  }

  nextBtn = () => {
    const carouselSibling = document.querySelector('.carousel__item ').nextElementSibling
    const carousel = document.querySelector('.carousel__item')
    const carouselChild = document.querySelectorAll('.carousel__item:nth-child(5)')
    this.setState(prevState => ({
      translateValue: prevState.translateValue - (this.slideWidth())
    })) 
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
    return document.querySelector('.slide').clientWidth
   }

   componentDidMount() {
     const carousel = document.querySelector('.js-carousel-list').children
     console.log(carousel)
     const carouselSibling = document.querySelector('.carousel__item ').nextElementSibling
     console.log(carouselSibling)
    document.querySelector('.number-2').classList.add('animated', 'fadeInUp', 'delay-3s')
   
    document.querySelector('.ui').classList.add('animated', 'fadeInLeft', 'delay-5s');
    
}

  componentWillUnmount() {
    document.querySelector('.number-2').classList.remove('animated', 'fadeInUp', 'delay-3s')
    
    document.querySelector('.ui').classList.remove('animated', 'fadeInLeft', 'delay-5s');
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
                <i onClick={this.nextBtn} class="green big arrow alternate circle right outline icon"></i>
          </div>

             
              <div class="carousel js-carousel">
                <div class="carousel__container js-carousel-container animated fadeInRight "
                  >
                  <div class="carousel__list js-carousel-list "
                    style={{
                      transform: `translateX(${this.state.translateValue}px)`,
                      transition: 'transform ease-out 0.45s'
                      }}
                  >

                    <div class="carousel__item js-carousel-item slide" key={0}>
                      <img className="imageView" src={"https://cdn.dribbble.com/users/1343667/screenshots/5265526/showcase_2x.png"} />
                    </div>
                    <div class="carousel__item js-carousel-item slide" key='1' >
                      <img className="imageView" src={"http://www.moneygossips.com/wp-content/uploads/2015/02/free-movie-sites-810x539.png"} />  
                    </div>
                    <div class="carousel__item js-carousel-item slide" key='2'>
                       <img className="imageView" src={'https://cdn.dribbble.com/users/26407/screenshots/2180312/dribbble_movie_app.jpg'} />
                    </div>
                    <div class="carousel__item js-carousel-item slide" key='3'>
                      <img className="imageView" src={"https://cdn.dribbble.com/users/903897/screenshots/6461891/shot.png"} />
                    </div>
                    <div class="carousel__item js-carousel-item slide" key='4'>
                       <img className="imageView" src={"https://cdn.dribbble.com/users/515185/screenshots/6469560/shot-cropped-1557605297901.png"} />
                    </div>
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
              <button class="ui primary button">view all projects</button>
              </div>

        </div>
      </div>
      </div>
  )
}
}

  export default ProjectsView;

  {/*
    document.querySelector('.js-carousel-list ').classList.remove('animated', 'fadeInRight', 'delay-4s');
  
  last function that worked



  
    nextBtn = () => {
  
    if(this.state.index + 5 ){
    this.setState(prevState => ({
      translateValue: prevState.translateValue + - (this.slideWidth())
    })) }  else if (this.state.index + 5 >  5) {
      this.setState(prevState => ({
        translateValue: -1
      }))
    }
  }


    prevBtn = () => {
    const items = document.querySelector('.js-carousel-list')
    
      this.setState(prevState => ({
        translateValue: prevState.translateValue + this.slideWidth()
      }))
    if(this.state.index +  5) {
      this.setState(prevState => ({
        translateValue: 0
      }))
    }
  }
  */}

  


