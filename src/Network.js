import React from 'react';
import '/Users/test/test/src/styles/Network.scss';
import './styles/_item_grid.scss';

import ContactPage from './ContactPage';
import ProjectsView from './ProjectsView';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Wrapper from './Wrapper';
import headshot from './assets/altImage.jpg';



class Network extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80'
        }  
    }

    scrollApear = () => {
        const introText = document.querySelector('.intro-parallax');
        const introPosition = introText.getBoundingClientRect().top;
        const screenPostition = window.innerHeight / 1.3;
        if(introPosition < screenPostition ) {
            introText.classList.add('scroll')
        }
    }
    
    componentDidMount() {
        document.querySelector('.year').classList.add('animated', 'fadeIn', 'delay-3s')
        window.addEventListener('scroll', this.scrollApear)
      }


    componentWillUnmount() {
        document.querySelector('.year').classList.remove('animated', 'fadeIn', 'delay-3s')
        window.removeEventListener('scroll', this.scrollApear);
    }
 
 
    render() {
        return (
            <div  className='Network' style={{background: 'white'}}>   
                <Wrapper />
                {/* Starts top document section */}
                <section id="intro" className="intro"> 
                    <div className="main-profile-container main-container" style={{  margin: '0 auto', display: 'flex', justifyContent: 'space-between'}} >
                        <div className="profile-container">
                                <div className="profile-container-image">
                                    <img id="img" className="image" alt="Jordy Baan by Michael Epps." 
                                    src={headshot}/>
                                <div className="discover">
                                    <div  className="profile-container-discover">
                                        <h2 className="profile-container-title">Discover More</h2>
                                    </div> 
                                </div> 
                                <div className="year">
                                    <span>2019</span>
                                </div>
                                <div className="title">
                                    <div className="hide-text"><span className="mid">Ale</span>xander <br/><span className="last-name"><span className="mid">G</span>ovea</span></div>
                                </div>
                            </div>
                        </div>
                        <div onScroll={this.scrollApear} className="intro-paragraph">
                            Hi there, my name is Alexander Govea and I am a front-end developer looking for an opportunity to provide value to your company. Currently based in California but willing to re-locate for an amazing opportunity.
                        </div>
                    </div>
                        <div className="intro-bottom main-container">
                            <div className="intro-bottom-section">
                                <div id="bg-screen"   className="intro-bottom-section-left animated fadeIn" >
                                INTRODUCTION
                                </div>
                                <div id="bg-screen" className="intro-bottom-section-rigth animated fadeIn" data-wow-delay="1s">
                                    Growing up I always enjoyed working with computers and researching tech related topics. 
                                    I completed my Bachelors in Psychology at UCSB but re-discovered my passion for technology after watching videos about software / web development.
                                    I am currently learning back-end technologies in order to expand my knowledge base and become an overall better developer.
                                </div>
                            </div>
                            <div className="intro-bottom-section">
                                <div id="bg-screen" className="intro-bottom-section-left wow fadeInLeft" >
                                    WHAT'S MY JOURNEY
                                </div>
                                <div style={{ width: '100%'}} className="intro-bottom-section-rigth wow fadeInRight">
                                    <div id="bg-screen" className="intro-bottom-timeline">
                                        <span > Front-end <br/>  learning the basics — HTML, CSS, Boostrap</span>
                                        <span>January - February 2019</span>
                                    </div>
                                    <div id="bg-screen" style={{ paddingTop: '3rem' }} className="intro-bottom-timeline">
                                        <span id="bg-screen">Front-end <br /> Hitting a Wall - learning Javascript </span>
                                        <span id="bg-screen">February - Present </span>
                                    </div>
                                    <div id="bg-screen" style={{ paddingTop: '3rem' }}  className="intro-bottom-timeline">
                                        <span id="bg-screen">Front-end <br />  Falling In Love - learning React / Redux / React-Router</span>
                                        <span id="bg-screen"> April - Present</span>
                                    </div>
                                    <div id="bg-screen" style={{ paddingTop: '3rem' }}  className="intro-bottom-timeline">
                                        <span id="bg-screen">Back-end <br />  Growing my skills - currently learning Nodejs / MongoDB / GraphQL</span>
                                        <span id="bg-screen"> July - Present</span>
                                    </div>
                                </div>
                            </div>
                            <div className="intro-bottom-section">
                                <div id="bg-screen" className="intro-bottom-section-left wow fadeInLeft">
                                WHAT'S MY MOTIVATION
                                </div>
                                < div id="bg-screen" className="intro-bottom-section-rigth wow fadeInRight">
                                I want to make web develoment my long term career, as I can't but to think about code every single minute of my day. Working in this field is the one thing that motivates me to improve my skills. 
                                </div>
                            </div>
                            <div id="bg-screen" className="intro-bottom-section">
                                <div id="bg-screen" className="intro-bottom-section-left wow fadeInLeft">
                                TECHNOLOGIES I USE
                                </div>
                                <div id="bg-screen" style={{ lineHeight: '2.2'}} className="intro-bottom-section-rigth wow fadeInRight">
                                    <h1 id="bg-screen" style={{ fontWeigth: '900' }} >Languages I speak:</h1>
                                    React, Redux, Sematic HTML, CSS, SCSS, Javascript, Boostrap 
                                <br /> 
                                    <h1 id="bg-screen"  style={{ fontWeigth: '900'  }} >Libraries I use:</h1>   
                                    React-Router, React-Redux, Wow.js, Animate.Scss, Redux-Thunk, Axios
                                    <h1 id="bg-screen"  style={{ fontWeigth: '900'  }} >Currently Learning:</h1>   
                                    GraphQL, MongoDB, Apollo, Nodejs, Express
                                    <h1 id="bg-screen"  style={{ fontWeigth: '900'  }} >Please Note:</h1>   
                                    I am currently learning backend technologies and will be creating an online clothing store to expand my knowledge on them. 
                                    I will be utilizing the MERN stack for this project and will be adding features as I learn.
                                    As of today I have added user authentication, the ability to add and remove items from the cart, and some basic routing. 
                                    I will provide a link to the website, but please note that this is not to be considered a completed project. 
                                    My full list of projects are on display either through the carousel below or by clicking on the top menu.
                                    This is the link to the website if you would like to see it : <a href="https://objective-hermann-bea7bf.netlify.com" id="optional-website" target="_blank">clothing store. </a>
                                </div>
                            </div>  
                        </div>
                        <div id="bg-screen" className="intro-parallax">
                            Curious Developer
                        </div>
                        <div className="intro-images-container" style={{ marginBottom: '7rem' }}>
                            <div className="intro-images wow fadeIn" data-wow-delay="1s" style={{ background: `url("https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80") no-repeat center center` }}>
                                   
                            </div>
                            <div className="intro-images wow fadeIn" data-wow-delay="1s" style={{ background: `url("https://images.unsplash.com/photo-1494783367193-149034c05e8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80") no-repeat center center` }}>
                            </div>
                        </div>
                </section>
                {/* Ends top document section */}
                <ProjectsView/>
                <div className="Network">
                <section className="network-bottom" >
                <section>
                    <nav className="static-nav">
                        <div className="number">
                            <span className="line wow fadeInLeft"></span>
                            <h2 className="line-number-five" id="Network">3</h2>
                        </div>
                        <div className="large social-media-icons">
                            <i id="github" class="large github icon page-four wow fadeInUp" ></i>
                            <i id="google"  class="large google plus icon page-four wow fadeInUp " data-wow-delay="1s"></i>
                            <i id="linkedin" class="large linkedin in icon page-four wow fadeInUp" data-wow-delay="2s"></i>
                        </div>
                    </nav>
       
                </section>
                <section className="main-container">
                        <div className="network-boxes-top wow fadeInUp" > 
                            <div className="network-boxes-top-row-one"></div>
                            <div className="network-boxes-top-row-two">
                                <Link
                                    to="intro"
                                    spy={true}
                                    smooth={true}
                                    duration={500}      
                                    style={{ color: 'black'}}                        
                                    >
                                    <i id="arrow-n arow-color-up" class="big arrow alternate circle up outline icon"></i>
                                </Link>
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    duration={500}   
                                    style={{ color: '#E3545f'}}                
                                    >
                                    <i id="arrow-n arrow-color-down" class="big arrow alternate circle down outline icon"></i>
                                </Link>
                            </div>
                            <div className="network-boxes-top-row-three"><img className="network-boxes-top-row-three" className="network-boxes-top-row-three" src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></div>
                            <div id="bg-dissappear" className="network-boxes-top-row-four"></div>
                            <div className="network-boxes-top-row-five"></div>
                        </div>


                        <div className="network-boxes-middle wow fadeInUp" > 
                            <div className="network-boxes-middle-row-one"></div>
                            <div className="network-boxes-middle-row-two"><img className="network-boxes-middle-row-two" src="https://images.unsplash.com/photo-1489712310660-bbce44cc541d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div>
                            <div className="network-boxes-middle-row-three"></div>
                            <div id="bg-dissappear" className="network-boxes-middle-row-four"><h1 className="network-title wow fadeInLeft" data-wow-delay="2s">network.</h1><img className="network-boxes-middle-row-four" id="intrinsic-img"  src="https://images.unsplash.com/uploads/14115120538776712c565/a699942a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div>
                            <div className="network-boxes-middle-row-five"><img className="network-boxes-middle-row-five" src="https://images.unsplash.com/photo-1485742032238-7543513eeba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></div>
                        </div>

                    <div className="network-boxes-bottom wow fadeInUp" > 
                        <div className="network-boxes-bottom-row-one"></div>
                        <div className="network-boxes-bottom-row-two"></div>
                        <div className="network-boxes-bottom-row-three"></div>
                        <div className="network-boxes-bottom-row-four"></div>
                        <div className="network-boxes-bottom-row-five"><img className="network-boxes-bottom-row-five" src="https://images.unsplash.com/photo-1463062511209-f7aa591fa72f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div>
                    </div>
                </section>
                    <section >
                            <div>
                                <div className="sideways-nav">
                                    <ul className='navigation'>
                                    <NavLink
                                        to="/Home"
                                    >
                                    <li  className="navigation-home">
                                         home
                                    </li>
                                    </NavLink>
                                        <li className="navigation-projects">
                                             <Link
                                                to="projects"
                                                spy={true}
                                                smooth={true}
                                                duration={500}                        
                                             >
                                                projects
                                            </Link>
                                        </li>
                                        <li className="navigation-testimonials">
                                            <Link
                                                to="Network"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                network
                                            </Link>
                                        </li>
                                        <li className="navigation-contacts">
                                            <Link
                                                to="contact"
                                                spy={true}
                                                smooth={true}
                                                duration={500}
                                            >
                                                Contact
                                            </Link>
                                        </li>
                                        <li className="navigation-resume">resume</li> 
                                    </ul>  
                                </div>
                        </div>
                    </section>
                </section>
            <ContactPage />
        </div>    
    </div>
  )}
}


export default Network;

