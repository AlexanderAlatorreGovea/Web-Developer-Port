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
        document.querySelector('.presentation-name').classList.add('animated', 'fadeInLeft', 'delay-2s')
        document.querySelector('.scroll-down').classList.add('animated', 'fadeIn', 'delay-3s')
        document.querySelector('.sideways-nav').classList.remove('animated', 'fadeIn', 'delay-2s')
    }

      componentWillUnmount() {
        document.querySelector('.presentation-landing-page').classList.remove('animated', 'fadeInUpBig', 'delay-1s')
        document.querySelector('.presentation-name').classList.remove('animated', 'fadeInLeft', 'delay-2s')
        document.querySelector('.scroll-down').classList.remove('animated', 'fadeIn', 'delay-3s')
        document.querySelector('.sideways-nav').classList.remove('animated', 'fadeIn', 'delay-2s')
    }


    render() {
        return(
        <div >
             <div className="LandingPage">
                <section>
                <div className="LandingPage-title">
                    <h1 className="presentation-name">hi, my name is </h1>
                    <br />
                    <span className="presentation-landing-page">alexander.</span>

                    <div className="sideways-nav" >
                    <ul className="navigation">
                        <Link to="/Home" >
                            <li className="navigation-home">home</li>
                        </Link>
                        <Link to="/Network" >
                            <li className="navigation-projects">projects</li>
                        </Link>
                        <Link to="/Network" className="navigation-testimonials">
                            <li className="navigation-testimonials">testimonials</li> 
                        </Link>
                        <Link to="/Network" >
                             <li className="navigation-contacts">contact</li>
                        </Link>
                        <Link to="/Network" >
                            <li className="navigation-resume">resume</li> 
                        </Link>
                    </ul>  
                </div>

                </div>             
                </section>
                <Link to="/Home">
                    <div className="scroll-down">
                    <i class="animated infinite fadeInDown  small long arrow alternate down icon"></i>
                    <h5 className="scroll">scroll down</h5>
                </div>
                </Link>
            </div>
            <Preloader />
        </div>
    )
    }
}

export default LandingPage;
