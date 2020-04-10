import React from 'react';
import '/Users/test/test/src/styles/ContactPage.scss';
import './styles/_item_grid.scss';
import WOW from "wowjs";
import Resume from './assets/resume1.pdf';

class ContactPage extends React.Component{
    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
    }

    render() {
        return( 
        <div id="contact">
            <section className="bottom-section-parallax main-container" >      
                <div className="bottom-parallax-nav">   
                    <div className="number-five">
                        <span className="line-five"></span>
                        <h2 className="line-number-five wow fadeInLeft">5</h2>
                    </div>

                    <div className="bottom-section">
                        <div className="contact-top">
                            <h1 className="contact-h-top">Contact.</h1>
                        </div>
                        <div className="get-in-touch-div"> 
                            <a className="get-in-touch" href="mailto:alexander_alatorre1993@hotmail.com">get in touch</a>
                            <div className="get-in-touch-phone get-in" ><a style={{ color: 'black' }} href="tel:8057585058"><i class="large phone icon"></i></a></div>
                            <div className="get-in-touch-map get-in"><i style={{ color: 'black' }}  class="large map marker alternate icon"></i></div>
                        </div>
                        <div className="get-in-touch-paragraph">
                            <p className="contact-info">
                            <br />
                            Oxnard California <br />

                            T +805 ‌222  2222<br />
                            F +352 ‌44 ‌66 ‌82 <br />
                            E alexander_alatorre1993@hotmail.com <br />
                            </p>
                        </div>
                    </div>
                </div>
                    <div className="bottom-section-middle"   >
                        <div className="contact-top-middle">
                            <h2 className="contact-h-middle">loooking to hire?</h2>
                            <p className="contact-h-middle-discover">browse my platforms</p>
                        </div>
                        <div className="get-in-touch-div-middle">
                            <div id="github-g" className="get-in-github"><a href="https://github.com/AlexanderAlatorreGovea"><i class="large github icon "></i></a></div>
                            <div id="linkedin-g" className="get-in-touch-linkedin get-padding" ><a href="https://www.linkedin.com/in/alexander-govea-735774107/"><i class="large linkedin in icon"></i></a></div>
                            <div id="google-g" className="get-in-touch-google get-padding"><a className="get-in-touch" href="mailto:alexander_alatorre1993@hotmail.com"><i class="large google plus icon "></i></a></div>
                        </div>
                        <div className="sign-up"> 
                            <p id="download" classNam="download">download my resume</p>
                            <a style={{ color: 'white', marginLeft: '30px'}} href={Resume} target="_blank"><i id="download"  class="long arrow alternate right icon"></i></a>
                            <span className="botton-span"></span>
                        </div>
                        <div>
                        <p id="download"  className="copyright wow fadeIn" style={{color: 'white'}}>&copy; 2010 AlexanderGovea.com</p>
                        </div>
                    </div>
                </section> 
            </div>
        )
    }
}

export default ContactPage;
