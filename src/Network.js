import React from 'react';
import '/Users/test/test/src/styles/Network.scss';
import ContactPage from './ContactPage';
import ProjectsView from './ProjectsView';
import { Link, animateScroll as scroll } from "react-scroll";
import { NavLink } from 'react-router-dom';
import Preloader from './Preloader';


class Network extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}  
    }
    


    render() {
       
        return (
<div  className='' style={{background: 'white'}}>   
<Preloader />    
 <ProjectsView/>
<div className="Network  ">

    <section  >
                <section  >
    
                    <nav className="static-nav">
                        <div className="number">
                            <span className="line wow fadeInLeft"></span>
                            <h2 className="line-number-five" id="Network">4</h2>
                        </div>
                        <div className="large social-media-icons">
                            <i class="large github icon page-four wow fadeInUp " ></i>
                            <i class="large linkedin in icon page-four wow fadeInUp" data-wow-delay="1s"></i>
                            <i class="large google plus icon page-four wow fadeInUp " data-wow-delay="2s"></i>
                        </div>
                    </nav>
      
                </section>
                <section>
                        <div className="network-boxes-top wow fadeInUp" data-wow-delay="1s"> 
                            <div className="network-boxes-top-row-one"></div>
                            <div className="network-boxes-top-row-two">
                                <i class="big arrow alternate circle up outline icon"></i>
                                <i class="big arrow alternate circle down outline icon"></i>
                            </div>
                            <div className="network-boxes-top-row-three"><img className="network-boxes-top-row-three" className="network-boxes-top-row-three" src="https://images.unsplash.com/photo-1475483768296-6163e08872a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></div>
                            <div className="network-boxes-top-row-four"></div>
                            <div className="network-boxes-top-row-five"></div>
                        </div>


                        <div className="network-boxes-middle wow fadeInUp" data-wow-delay="1s"> 
                            <div className="network-boxes-middle-row-one"></div>
                            <div className="network-boxes-middle-row-two"><img className="network-boxes-middle-row-two" src="https://images.unsplash.com/photo-1489712310660-bbce44cc541d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div>
                            <div className="network-boxes-middle-row-three"></div>
                            <div className="network-boxes-middle-row-four"><h1 className="network-title wow fadeInLeft" data-wow-delay="2s">network.</h1><img className="network-boxes-middle-row-four" src="https://images.unsplash.com/uploads/14115120538776712c565/a699942a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/></div>
                            <div className="network-boxes-middle-row-five"><img className="network-boxes-middle-row-five" src="https://images.unsplash.com/photo-1485742032238-7543513eeba6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" /></div>
                        </div>

                    <div className="network-boxes-bottom wow fadeInUp" data-wow-delay="1s"> 
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