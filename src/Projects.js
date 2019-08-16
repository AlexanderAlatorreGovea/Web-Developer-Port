import React, { Component } from 'react';
import ContactPage from './ContactPage';
import Wrapper from './Wrapper';

import './styles/Projects.scss';
import './styles/_item_grid.scss';

import { Link, animateScroll as scroll } from "react-scroll";

import emailtwo from './assets/emailtwo.jpg';
import email from  './assets/email.jpg';
import menu from './assets/menu.jpg';
import listings from './assets/listings.jpg';
import restaurantfront from  './assets/restaurantfront.jpg';
import movie2 from './assets/movie2.jpg';
import movies3 from './assets/movies3.jpg';
import dagency from './assets/dagency.png';


class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            globalState : [
                { 
                   title: 'The Movie Bonanza',
                   description: 'This project was made with the purpose of utilizing cutting edge techonologies while implementing best practices, and getting comfortable with using rest APIs. I decided to make The Movie Bonanza to allow people to search for their favorite movies and get a feel for the movie they decide to watch. This website will allow you to: search your favorite movies,  link you to the newest and upcoming movies and provide you with a unique user experience. Make sure you sign up to discover more features :).   As a side Note I would like to thank The Movie DB for providing the data via their Unique Api.',
                   date: 'June-July 2019',
                   img: movie2 ,
                   tech: 'React, Redux, Javascript, Scss, React Router, wowjs',
                   link: 'https://moviebonanzadb.com',
                   codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
                },
                { 
                   title: 'Nexter',
                   description: 'This project was made to practice HOC in order to simulate real time sorting of data. I decided to utilize local data for this project, all the mock data can be found inside the global state. With this project you will be able to find a house in Ventura County and sort out the houses based on Prices, location, add ons etc... You will also be able to sign up in order to book an appointment with a realtor. Give this project a try you may find out that it is scalable as well :).',
                   img: listings,
                   date: 'April-May 2019',
                   tech: 'React, Javascript, React Router, Scss',
                   link: 'http://realestatenexter.com',
                   codelink: 'https://github.com/AlexanderAlatorreGovea/Real-state-website'
                },
                {  
                    title: 'Digital Agency',
                    description: 'This layout was designed with bootstrap to be used by any digital agency that may want to gain exposure and display their services.',
                    img: dagency,
                    date: 'July 2019',
                    tech: 'HTML, Bootstrap, CSS',
                    link: 'https://alexanderalatorregovea.github.io/Digital-agency-m/',
                    codelink: 'https://github.com/AlexanderAlatorreGovea/Digital-agency-m'
                 }, 
                { 
                   title: 'The Steak House',
                   description: 'Enjoy your favorite meals at your local Restaurant. This is a single page web application that I made using React. The purpose of this project was to create an aesthetically pleasing website that can be used by any local restaurant. This project is easily scalable  and  a lot of detail was put into every single component.',
                   img: menu,
                   date: 'April 2019',
                   tech: 'React, CSS, Javascript',
                   link: 'https://steakhouserestaurant.net',
                   codelink: 'https://github.com/AlexanderAlatorreGovea/MovieTheaterProject'
                },
                { 
                   title: 'Hero Lets you',
                   description: 'It is a reality that companies need email lists in order to increase their revenue. This project is an HTML email that is cross email compatible. Tested with Litmus, this email provides a personal touch to the daily outreach that companies can make to their consumers/ potential costumers.',
                   img: email,
                   date: 'February 2019',
                   tech: 'HTML, Tested with Litmus (Cross Browser/ Cross Email compatible)',
                   link: 'https://alexanderalatorregovea.github.io/Email.html/',
                   codelink: 'https://github.com/AlexanderAlatorreGovea/Email.html'
                }
            ]
        }
    }

    componentDidMount() {
        document.querySelector('.top-separator-title').classList.add('animated', 'fadeInUp', 'delay-1s')

    }

    componentWillUnmount() {
        document.querySelector('.top-separator-title').classList.add('animated', 'fadeInUp', 'delay-1s')

    }
 
    render() {
        return (
            <div className="Projects" >
                <Wrapper />
                <section id="work-a" className="text-center py-3">
                    <div className="main-container">

                    <div className="top-separator" >
                        <div style={{ background: '#845007', alignSelf: 'center'}} className="top-tertiary-line"></div> 
                        <div className="top-separator-title">
                            latest work.
                        </div>  
                    </div>

                        <div style={{ height: '.5px', width: '100%', background: '#bbb', display: 'none', marginBottom: '3rem', height: '1px'}} className="secondary-bottom-line"></div>
                        <div className="items">
                            {/* Bottom section after gallery */}
                            <div id="item" class="item" >
                                <div>
                                    <img id="item-image" src={ movies3 } id="item-image" alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <Link style={{ color: 'black' }}
                                            activeClass="active"
                                            to="The Movie Bonanza"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}>
                                            <p class="item-text-category">Movie Theater</p>
                                            <h2 class="item-text-title">The Movie Bonanza</h2>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                            {/* Bottom section after gallery */}
                            <div id="item" class="item" >
                                <div>
                                    <img src={ listings } id="item-image" alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                    <Link style={{ color: 'black' }}
                                        activeClass="active"
                                        to="Nexter"
                                        spy={true}
                                        smooth={true}
                                        offset={-70}
                                        duration= {500}>
                                        <p class="item-text-category">Real State</p>
                                        <h2 class="item-text-title">Nexter</h2>
                                    </Link>
                                    </div>
                                </div>
                             </div>
                             <div id="item" class="item">
                                <div>
                                    <img src={menu} id="item-image" alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <Link style={{ color: 'black' }}
                                            activeClass="active"
                                            to="The Steak House"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}>
                                            <p class="item-text-category">Restaurant</p>
                                            <h2 class="item-text-title">Steak House</h2>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                             <div id="item" class="item" style={{ boxShadow:' 0.3rem 0.4rem 0.4rem rgba(0, 0, 0, 0.4)'}} >
                                <div>
                                    <img src={ emailtwo } id="item-image"  alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <Link style={{ color: 'black' }}
                                            activeClass="active"
                                            to="Hero Lets you"
                                            spy={true}
                                            smooth={true}
                                            offset={-70} 
                                            duration= {500}>
                                            <p class="item-text-category">Micro Services</p>
                                            <h2 class="item-text-title"> Email</h2>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                             <div id="item" class="item"  >
                                <div>
                                    <img src={ dagency } id="item-image" alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <Link style={{ color: 'black' }}
                                            activeClass="active"
                                            to="Digital Agency"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}>
                                            <p class="item-text-category">Digital Agency</p>
                                            <h2 class="item-text-title">Dagency</h2>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                             <div id="item" class="item"  >
                                <div>
                                    <img src={restaurantfront} id="item-image" alt="" />
                                </div>
                                <div class="item-text">
                                    <div class="item-text-wrap">
                                        <Link style={{ color: 'black' }}
                                            activeClass="active"
                                            to="The Steak House"
                                            spy={true}
                                            smooth={true}
                                            offset={-70}
                                            duration= {500}>
                                            <p class="item-text-category">Restaurant</p>
                                            <h2 class="item-text-title">Steak House</h2>
                                        </Link>
                                    </div>
                                </div>
                             </div>
                             {/* Bottom section after gallery */}
                             <div className="separator" >
                                <div style={{ background: '#845007', alignSelf: 'center'}} className="tertiary-line"></div> 
                                <div className="separator-title wow fadeInUp">
                                    projects.
                                </div>  
                            </div>
                             <section className="individual-project">
                             {this.state.globalState.map((info, index) => {
                                return(
                                <div id={`${info.title}`} className="individual-project-container">
                                    <div className="individual-project-top">
                                        <div className="individual-project-info wow fadeInLeft" data-wow-delay="1s">
                                            <h1 className="individual-project-title">{info.title}</h1>
                                            <p className="individual-project-description">{info.description}</p> 
                                            <div className="individual-project-icon">
                                                <span className="individual-project-link">Project's code</span>
                                                <a href={info.codelink} target="_blank"><i class="long arrow alternate right icon"></i></a>
                                           </div>
                                        </div>
                                        <div className="individual-project-date-info wow fadeInRight">
                                            <div >
                                                <span className="individual-project-date">Date</span><br/>
                                                <span className="individual-project-year">{info.date}</span>
                                            </div> 
                                            <div className="individual-project-tech">
                                                <span className="individual-project-tech-title">Technologies</span><br/>
                                                <span className="individual-project-technologies">{info.tech}</span>
                                            </div>
                                            <div className="individual-project-tech">
                                                <span className="individual-project-tech-title">Website</span><br/>
                                                <span className="individual-project-technologies"><a id="website-link" href={info.link} target="_blank" >Click me to view the website</a></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="individual-project-image wow fadeIn" data-wow-delay="1s">
                                        <a href={info.link} target="_blank"> 
                                            <img style={{ width: '100%' }} className="individual-project-img" src={`${info.img}`} />
                                        </a>
                                    </div>
                                </div>
                                )
                            })}  
                             </section>
                             {/* Testimonials */}
                             <section>
                                <div className="RandomQuote">
                                    <div className="container">
                                        <h1>"He is a delight to work with and a valuable resource to our business."</h1>
                                        <span className="author">- Jose Andres -</span>
                                    </div>
                                 </div>
                             </section>
                        </div>
                    </div> 
                </section>
                <ContactPage />
            </div>
        );
    }
}

export default Projects;

