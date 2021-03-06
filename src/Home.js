import React from 'react';
import './styles/variables.scss';
import '/Users/test/test/src/styles/Home.scss';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Preloader from './Preloader';
import './styles/variables.scss';

class Home extends React.Component {
    constructor(props) {
        super(props);
    
        this.state = {
            visible: false,
            isClicked: false
        }
        this.handleToggleNav = this.handleToggleNav.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.listRef = React.createRef();
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


      componentDidMount() {
        document.querySelector('.right').classList.add('animated', 'fadeInLeft', 'delay-2s')
        document.querySelector('.left').classList.add('animated', 'fadeInRight')
        document.querySelector('.account-h').classList.add('animated', 'fadeInLeft', 'delay-3s');
        document.querySelector('.year').classList.add('animated', 'fadeInRight', 'delay-2s')
        document.querySelector('.connect-h').classList.add('animated', 'fadeInLeft', 'delay-2s')
    }

      componentWillUnmount() {
        document.querySelector('.right').classList.remove('animated', 'fadeInLeft' )
        document.querySelector('.left').classList.remove('animated', 'fadeInRight')
        document.querySelector('.account-h').classList.remove('animated', 'fadeInLeft', 'delay-3s')
        document.querySelector('.year').classList.remove('animated', 'fadeInRight', 'delay-2s')
        document.querySelector('.connect-h').classList.remove('animated', 'fadeInLeft', 'delay-2s')
    }

    toggleActiveTab = () => {
        this.setState({
            isActive: this.state.activeTab
        })
    }


    render() { 
        return (
             <div className="Home">
                <nav className="header">
                    <div className="navbar">
                        <div className="main-nav">
                            <div className="account">
                                <i style={{color: 'black'}} className="inverted big user icon"></i>
                                <div id="account" className="account-div">
                                     <h1 className="account-h" >Account</h1>
                                </div>
                            </div>
                        </div>
                        <div className="toggle-nav">
                             <button onClick={this.handleToggleNav} className={`main-nav-toggle-button hamburger hamburger--elastic${this.state.visible ? ' is-active' : ''}`} type="button">
                                <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                                </span>
                            </button>
                                    <ul 
                                    active={this.state.active}
                                    className={`${this.state.visible ? 'tog-active animated fadeIn' : 'tog-inactive'}`} 
                                    ref={this.ulRef}
                                    >
                                        <Link to="/Home">
                                        <li ref={this.listRef} onClick={this.mouseO} className={`lis ${this.state.visible ? 'about animated fadeInDown li' : ''}`}  onClick={this.toggleImg}  > About</li>
                                        </Link>
                                        <Link to="/Network">
                                        <li  className={`lis ${this.state.visible ? 'projects-li animated fadeInDown li' : ''}`}   >Projects</li>
                                        </Link>
                                        <Link to="/Network">
                                        <li  className={`lis ${this.state.visible ? 'testimonials-li animated fadeInDown li' : ''}`}  >Testimonials</li>
                                        </Link>
                                        <Link to="/Network">
                                        <li  className={`lis ${this.state.visible ? 'contact-li animated fadeInDown li' : ''}`}  
                                        >Contact</li>
                                        </Link>
                                        <Link to="/Network">
                                        <li  className={`lis ${this.state.visible ? 'resume-li animated fadeInDown li' : ''}`}
                                        onClick={this.setActiveList}>Resume</li>
                                        </Link>
                                    </ul>
                        </div>
                    </div>
                </nav>
                <div className="img">
                    <div className="image-container">
                                <div
                                >
                                    <img id="img" className={`${this.state.isClicked ? 'activeImg' : 'image'}`} alt="Jordy Baan by Michael Epps." ref={this.imageRef}  
                                        src="https://i.pinimg.com/564x/67/97/6f/67976fe1b5958701f09ed747c158b19a.jpg"/>
                                </div>
                            <div className={`title ${ this.state.isClicked ? 'activeTitle' : 'title-return'}`}>
                                <div className="hide-text"><span className="mid">Ale</span>xander <br/><span className="last-name"><span className="mid">G</span>ovea</span></div>
                            </div>

                            <div className="discover">

                                <div><h2>Discover More</h2></div> 
                            </div>
                            <div className="connect">
                                <h2 className="connect-h">Connect</h2>
                            </div>
                            <div className="year ">
                                <span className="">2019</span>
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
                                    {`Lorem ipsum dolor amet blue bottle shaman subway tile listicle ramps cardigan. Cronut pok pok chambray hot chicken, +1 synth YOLO four dollar toast locavore helvetica shoreditch. Farm-to-table shaman DIY organic, 
                                    forage la croix selvage ugh typewriter everyday carry bitters gastropub man bun. Occupy flexitarian locavore, brooklyn affogato quinoa polaroid. Blue bottle VHS shabby chic, 
                                    tumeric you probably haven't heard of them swag williamsburg wolf. Affogato cold-pressed live-edge microdosing trust fund wolf kogi brooklyn man braid cornhole chartreuse.`}
                                    </p>
                                </div>
                      
                        </div>

                         </div>
                <div> 
                <div className="ic animated fadeInUp delay-2.2s">
                    <i style={{color: 'black'}} class="big inverted github alternate icon"></i>
                    <i  style={{color: 'black'}} class="big inverted linkedin in icon "></i> 
                    <i style={{color: 'black'}} class="big black inverted envelope outline icon "></i>
                </div>
                <div className="arr">
                    <Link to="/LandingPage" style={{textDecoration: 'none'}}>
                        <i id="arrow-left" style={{color: 'black'}} class="big inverted arrow left icon"></i>
                    </Link>
                    <Link to="/Network" style={{textDecoration: 'none'}}>
                        <i id="arrow-right" style={{color: 'black'}} class="big inverted arrow right icon" ></i>
                    </Link>
                </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Home;
