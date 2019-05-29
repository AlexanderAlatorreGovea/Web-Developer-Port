import React from 'react';
import '/Users/test/test/src/styles/ContactPage.scss';
import WOW from "wowjs";


class ContactPage extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        const wow = new WOW.WOW();
        wow.init();
      }


    render() {
        return(
        <div id="contact" >
    
<section className="bottom-section-parallax " >      

<div className='bottom-parallax-nav '>   
                            <div className="number-five ">
                                <span className="line-five"></span>
                                <h2 className="line-number-five wow fadeInLeft">5</h2>
                            </div>

                            <div className="bottom-section">
                                <div className="contact-top">
                                    <h1 className="contact-h-top">Contact.</h1>
                                </div>
                                <div className="get-in-touch-div">
                                    <div className="get-in-touch">get in touch</div>
                                    <div className="get-in-touch-phone get-in" ><i class="large phone icon"></i></div>
                                    <div className="get-in-touch-map get-in"><i class="large map marker alternate icon"></i></div>
                                </div>
                                <div className="get-in-touch-paragraph">
                                    <p className="contact-info">
                                    113, ‌avenue ‌Gaston ‌Diderich<br />
                                    L-1420 ‌Luxembourg <br />

                                    T +352 ‌44 ‌61 ‌61 <br />
                                    F +352 ‌44 ‌66 ‌82 <br />
                                    E contact@cropmark.lu <br />
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
                                    <div className="get-in-github"><i class="large github icon "></i></div>
                                    <div className="get-in-touch-linkedin get-padding" ><i class="large linkedin in icon "></i></div>
                                    <div className="get-in-touch-google get-padding"><i class="large google plus icon "></i></div>
                                </div>
                                <div className="sign-up">
                                    <p classNam="download">download my resume</p>
                                    <i class="long arrow alternate right icon"></i>
                                    <span className="botton-span"></span>
                                </div>
                                <div>
                                <p className="copyright wow fadeIn" style={{color: 'white'}}>&copy; 2010 AlexanderGovea.com</p>
                                </div>
</div>


</section> 




        </div>
    )
    }
}

export default ContactPage;
