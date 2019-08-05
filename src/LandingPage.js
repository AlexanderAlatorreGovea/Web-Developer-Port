import React from 'react';
import '/Users/test/test/src/styles/LandingPage.scss';
import { Link } from 'react-router-dom';
import Preloader from './Preloader';

class LandingPage extends React.Component{
    constructor(props) {
        super(props)

    }


    componentDidMount() {
        document.querySelector('.presentation-landing-page').classList.add('animated', 'fadeInUpBig', 'delay-1s');
        document.querySelector('.presentation-name').classList.add('animated', 'fadeInUp')
        document.querySelector('.scroll-down').classList.add('animated', 'fadeInUp', 'delay-5s')
        document.querySelector('.sideways-nav-landing').classList.add('animated', 'fadeIn', 'delay-5s')
        document.querySelector('.description-landing').classList.add('animated', 'fadeIn', 'delay-2s');

    }

      componentWillUnmount() {
        document.querySelector('.presentation-landing-page').classList.remove('animated', 'fadeInUpBig', 'delay-1s')
        document.querySelector('.presentation-name').classList.remove('animated', 'fadeInUp')
        document.querySelector('.scroll-down').classList.remove('animated', 'fadeInUp', 'delay-5s')
        document.querySelector('.sideways-nav-landing').classList.remove('animated', 'fadeIn', 'delay-5s')
        document.querySelector('.description-landing').classList.remove('animated', 'fadeIn', 'delay-2s');
    }
 

    render() {
        return(
             <div className="LandingPage">
                <section id="landing-page-section">
                    <div className="LandingPage-title">
                        <h1 className="presentation-name">hi, my name is </h1>
                        <br />
                        <div class="typewriter">
                            <span  className="presentation-landing-page typewriter-text">alexander.</span>
                        </div>
                        {/*Begining of description */}
                        <h2 className="description-landing">
                            and I am a 
                            <div class="words">
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                                <span>creative</span>
                                <span>hard working</span>
                                <span>reliable</span>
                                <span>web dev</span>
                            </div>
                        </h2>
                        {/*End of description */} 
                    <div className="sideways-nav-landing" > 
                        <ul className="navigation-landing">
                            <Link className="navigation-link" to="/" >
                                <li className="navigation-home-landing">home</li>
                            </Link>
                            <Link className="navigation-link" to="/Projects" >
                                <li className="navigation-home-landing">all projects</li>
                            </Link>
                            <Link className="navigation-link" to="/Network">
                                <li className="navigation-home-landing">discover more</li> 
                            </Link>
                            <Link className="navigation-link" to="/Network">
                                <li className="navigation-home-landing">contact</li> 
                            </Link>
                        </ul>  
                    </div>

                    </div>             
                </section>
                <Link style={{ cursor: 'pointer' }} to="/Network">
                <div className="scroll-down">
                    <i id="down" class="animated infinite fadeInDown long arrow alternate down icon"></i>
                    <div style={{ color: 'white' }} className="scroll-title">click me</div>
                </div>
                </Link>
            </div>
        )
    }
}

export default LandingPage;
