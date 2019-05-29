import React from 'react';
import '/Users/test/test/src/styles/_.variable.css';
//import './Project.scss';

class Project extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
          visible: false,
           isClicked: true,
           circleClicked: 0,
           currentImg: '',
           currentIndex: 0, 
           allImgs: [
             "https://cdn.dribbble.com/users/1343667/screenshots/5265526/showcase_2x.png",
             "https://cdn.dribbble.com/users/1230012/screenshots/6469540/04_2x.png",
             "https://cdn.dribbble.com/users/501822/videos/25511/dribbble.mp4",
            "https://cdn.dribbble.com/users/903897/screenshots/6461891/shot.png",
             "https://cdn.dribbble.com/users/515185/screenshots/6469560/shot-cropped-1557605297901.png"
         ],
         linkClicked: false 
        }
        this.handleToggleNav = this.handleToggleNav.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);

        this.movies= React.createRef();
        this.product = React.createRef();
        this.thing = React.createRef();
        this.thingOne = React.createRef();
        this.thingTwo = React.createRef();
      }
    
      handleToggleNav(e) {
        this.toggleMenu();
    
        e.stopPropagation();
      }

      toggleMenu() {
        this.setState({ visible: !this.state.visible})
      }

      toggleImg = () => {
        this.setState({
            isClicked: !this.state.isClicked
        })
      }

      toggleCircleMenu = () => {
          this.setState({
            circleClicked: !this.state.circleClicked
          })
      }


    
    /////JOE
      /*
    handleUrl = (e) => {
        let images = this.state.allImgs
        let currentIndex = this.state.currentIndex
        let currentTarget = e.currentTarget

        if( e.currentTarget = this.movies.current ) {
            this.setState ({ currentIndex: currentIndex  }) 
        } else if ( this.product.current ) {
            this.setState ({ currentIndex: currentIndex + 1 }) 
        } else if ( currentTarget =  this.thing.current ) {
            this.setState ({ currentIndex: currentIndex + 2 }) 
        } else if ( currentTarget =  this.thingOne .current  ) {
            this.setState ({ currentIndex: currentIndex + 3 }) 
        } else if ( currentTarget =  this.thingTwo.current ) {
            this.setState ({ currentIndex: currentIndex + 4 }) 
        } 
        this.setState({ images: this.state.allImgs[currentIndex]})
    }*/
   
    handleUrl = (e) => {
        let images = this.state.allImgs
        let currentIndex = this.state.currentIndex
        let currentTarget = e.currentTarget
        if( e.currentTarget = this.movies.current ) {
           this.setState({ currentIndex: currentIndex + 1 })
        } else if ( e.currentTarget =  this.toggleProjectMenu.current ) {
            this.setState({ currentIndex: currentIndex + 2  })
        } else if ( e.currentTarget =  this.thingTwo.current ) {
            this.setState({ currentIndex: currentIndex + 3  })
        } else if ( e.currentTarget =  this.thingOne.current  ) {
            this.setState({ currentIndex: currentIndex + 4  })
        } else if ( currentTarget =  this.product.current ) {
            this.setState({ currentIndex: currentIndex + 5 })
        }
        this.setState({ images: this.state.allImgs[currentIndex]})
    }


      componentDidMount() {
        document.querySelector('.account-h').classList.add('animated', 'fadeInLeft', 'delay-3s');
        document.querySelector('.circle-div').classList.add('animated', 'fadeInRight', 'delay-2s')
        document.querySelector('.connect-h').classList.add('animated', 'fadeInLeft', 'delay-2s')
    }

      componentWillUnmount() {
        document.querySelector('.account-h').classList.remove('animated', 'fadeInLeft', 'delay-3s')
        document.querySelector('.circle-div').classList.remove('animated', 'fadeInRight', 'delay-2s')
        document.querySelector('.connect-h').classList.remove('animated', 'fadeInLeft', 'delay-2s')
    }
  

    render() { 
        return (
            <div className="Home">
                <nav className="header">
                    <div className="navbar">
                        <div className="main-nav">
                            <div className="account">
                                <i className="inverted white big user icon"></i>
                                <div id="account" className="account-div">
                                     <h1 className="account-h" >Projects</h1>
                                </div>
                            </div>
                        </div>
                        <div className="toggle-nav">
                             <button onClick={this.handleToggleNav} className={`main-nav-toggle-button hamburger hamburger--elastic${this.state.visible ? ' is-active' : ''}`} type="button">
                                <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                                </span>
                            </button>
                           { this.state.visible ? (
                            <ul className="tog animated fadeIn">
                            <li className="about animated fadeInDown" ref={this.listRef} onClick={this.toggleImg} >About</li>
                            <li className="projects-li animated fadeInDown" onClick={this.toggleImg}>Projects</li>
                            <li className="testimonials-li animated fadeInDown" >testimonials</li>
                            <li className="contact-li animated fadeInDown " >Contact</li>
                            <li className="resume-li animated fadeInDown " >Resume</li>
                            </ul>) 
                            : ''}
                        </div>
                    </div>
                </nav>
                <div className="img">
                    <div className="image-container">
                                <div>
                                {/*IMAGE //////////////////////////////////////////////////////////////*/}

                                <img
                                className={`${this.state.isClicked ? 'activeImg' : 'image'}`}
                                alt="Jordy Baan by Michael Epps." ref={this.imageRef}  
                                src={this.state.allImgs[this.state.currentIndex]}/> 

                                {/* 
                                        Joe's code 
                                            <img
                                                className={`${this.state.isClicked ? 'activeImg' : 'image'}`}
                                                alt="Jordy Baan by Michael Epps." ref={this.imageRef}  
                                                src={this.state.currentImg}/> 
                                */}

                            {/* 
                                {this.state.allImgs.map((image, i) => {
                               if( i <  1) {
                                return (
                                    <img
                                        className={`${this.state.isClicked ? 'activeImg' : 'image'}`}
                                        alt="Jordy Baan by Michael Epps." ref={this.imageRef}  
                                        src={this.state.allImgs[0]}
                                    /> 
                                ) 
                                }
                                })}    

                                other shit that i tried that kind of worked

                                 src={`${this.state.linkClicked ? this.handleUrl :  this.state.allImgs[0]}`}
                            */}
                           

                                </div>
                            <div className={`title ${ this.state.isClicked ? 'activeTitle' : 'title-return'}`}>
                                <div className="hide-text"><span className="mid">Ale</span>xander <br/><span className="last-name"><span className="mid">G</span>ovea</span></div>
                            </div>

                            <div className="connect">
                                <h2 className="connect-h">Connect</h2>
                            </div>


                        {/*````````````````````````````````````````` 
                            className="project-list"
                        */}
                            <div
                                className="circle-div"
                            >
                                <span className="circle"><i onClick={this.toggleCircleMenu}
                             className={`plus circle icon inverted big ${this.state.circleClicked ? '' : 'circle-active'}`}
                                ></i></span>

                                    <ul 
                                            
                                    className={ `${this.state.circleClicked ? '' : 'project-list animated fadeIn' }`}>
                                    <li
                                        ref={this.movies} data-id="1"
                                        onClick={this.handleUrl}
                                        className={`${this.state.circleClicked ? 'about animated fadeIn li' : ''}`} 
                                        >Theater </li>
                                    <li  
                                        ref={this.product} data-id="2"
                                        onClick={this.handleUrl }
                                        className={`${this.state.circleClicked ? 'projects-li animated fadeIn li' : ''}`}  ><span className="e-commerce">E-Commerce</span> </li>
                                    <li
                                        ref={this.thing} data-id="3"
                                        onClick={this.handleUrl }
                                        className={`${this.state.circleClicked ? 'testimonials-li animated fadeIn li' : ''}`}
                                    >Email </li>
                                    <li
                                        ref={this.thingOne}
                                        onClick={this.handleUrl}
                                        className={`${this.state.circleClicked ? 'contact-li animated fadeIn li' : ''}`}
                                    >Restaurant </li>
                                    <li
                                        ref={this.thingTwo}
                                        onClick={this.handleUrl }
                                        className={`${this.state.circleClicked ? 'resume-li animated fadeIn li' : ''}`}
                                    ><span className="real-state">Real State</span></li>
                                </ul>   
                                
                                            {/* 
                                             <li
                                        onClick={this.handleUrl.bind(this.state.allImgs[0])}
                                        className={`${this.state.circleClicked ? 'about animated fadeIn li' : ''}`} 
                                        >Theater </li>

                                        *****************************


                                                <ul 
                                            
                                                className={ `${this.state.circleClicked ? '' : 'project-list animated fadeIn' }`}>
                                                <li
                                                    onClick={this.clickedThumb.bind(null, this.state.allImgs[0])}
                                                    className={`${this.state.circleClicked ? 'about animated fadeIn li' : ''}`} 
                                                    >Theater </li>
                                                <li  
                                                    onClick={this.clickedThumb}
                                                    className={`${this.state.circleClicked ? 'projects-li animated fadeIn li' : ''}`}  ><span className="e-commerce">E-Commerce</span> </li>
                                                <li
                                                    onClick={this.clickedThumb.bind(null, this.state.allImgs[1])}
                                                    className={`${this.state.circleClicked ? 'testimonials-li animated fadeIn li' : ''}`}
                                                >Email </li>
                                                <li
                                                    onClick={this.clickedThumb.bind(this.state.allImgs[2])}
                                                    className={`${this.state.circleClicked ? 'contact-li animated fadeIn li' : ''}`}
                                                >Restaurant </li>
                                                <li
                                                    onClick={this.clickedThumb.bind(this.state.allImgs[3])}
                                                    className={`${this.state.circleClicked ? 'resume-li animated fadeIn li' : ''}`}
                                                ><span className="real-state">Real State</span></li>
                                            </ul>   
                                            
                                            */}
                                         

                                    
                            </div>

                            <div id="projects"className="projects">
                                <div>
                                <h3  className={`animated fadeInDown ${this.state.isClicked ? 'animated fadeInUp' : ''}`}>{this.state.isClicked ? 'About' : 'Projects'}</h3>
                                </div>
                                <div className="line"><div className="main-line"></div></div>
                            </div>
                            <div>
                            
                    
                                <div className={`${this.state.isClicked ? 'about-active-p' : 'about-paragraph'}`}>
                                    <p className= {` ${this.state.isClicked ? 'about-text animated fadeIn delay-1s ' : ''}`}> 
                                    {`
                                    Lorem ipsum dolor amet blue bottle shaman subway tile listicle ramps cardigan. Cronut pok pok chambray hot chicken, +1 synth YOLO four dollar toast locavore helvetica shoreditch. Farm-to-table shaman DIY organic, 
                                    forage la croix selvage ugh typewriter everyday carry bitters gastropub man bun. Occupy flexitarian locavore, brooklyn affogato quinoa polaroid. Blue bottle VHS shabby chic, 
                                    tumeric you probably haven't heard of them swag williamsburg wolf. Affogato cold-pressed live-edge microdosing trust fund wolf kogi brooklyn man braid cornhole chartreuse.
                                    `}
                                    </p>
                                </div>
                      
                        </div>

                         </div>
                <div>
                <div className="ic animated fadeInUp delay-2.2s">
                    <i class="big inverted white github alternate icon"></i>
                    <i class="big inverted white linkedin in icon "></i> 
                    <i class="big inverted white envelope outline icon "></i>
                </div>
                {/* 
                    Arrow Placeholder
                    <div className="arr">
                    <i id="arrow-left" class="big inverted white arrow left icon"></i>
                    <i id="arrow-right"class="big inverted white arrow right icon" ></i>
                </div>
                */}
                </div>
                </div>
            </div>
        )
    }
}


export default Project;

/* {*get 21 and older*}
    filter() example 
        filter is to filter everything that we dont want
        const canDrink = ages.filter(age => age >= 21)
        
        const retailCompanies = companies.filter((company) =>{
            if (company.category == 'retai')
                return true
        }))
    
    const eightiesCompanies = companies.filter(company => (company.start >= 1980 && company.start < 1990))

    Get companies that lasted 10 years or more
      const lastedTenYears = companies.filter(company => (company.end -company.start > 10))


      SORT
      const sortedCompanies = companies.sort(function(c1, c2) {
        if (c1.start > c2.start) {
            return 1
        } else{
            -1
        }
      })

      Reduce
*/

{/* so what i think is going on  is that the state is mutating the state with every click and adding 1 per click or two per click */}

