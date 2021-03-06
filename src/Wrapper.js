import React, { Component } from 'react';
import SideDrawer from './SideDrawer';

import { Link, NavLink } from "react-router-dom";
import Resume from './assets/resume1.pdf';
import './styles/Wrapper.scss';
import './styles/_hamburgerButton.scss';
 
class Wrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleMenu: false
        }
    }
 
    componentDidMount() {
        document.querySelector('.wrapper-title').classList.add('animated', 'fadeInUp')
        document.querySelector('.wrapper-menu').classList.add('animated', 'fadeIn' )
        document.querySelector('.up').classList.add('animated', 'fadeInUp', 'delay-1s')
        document.querySelector('.down').classList.add('animated', 'fadeInDown', 'delay-1s')
    }  

    componentWillUnmount() {
        document.querySelector('.wrapper-title').classList.remove('animated', 'fadeInUp')
        document.querySelector('.wrapper-menu').classList.remove('animated', 'fadeIn')
        document.querySelector('.up').classList.remove('animated', 'fadeInUp', 'delay-1s')
        document.querySelector('.down').classList.remove('animated', 'fadeInDown', 'delay-1s')
    }

    componentWillReceiveProps(prevState, prevProps) {
        if (this.props.removeSideBar !== prevProps.removeSideBar) {
            document.querySelector('.sideways-right-nav-wrapper').classList.add('m-fadeOut')
            document.querySelector('.sideways-left-nav-wrapper').classList.add('m-fadeOut')
        }
    }


    toggleMenu = () => { this.setState({ visibleMenu: !this.state.visibleMenu})}

    render() {
        console.log(this.props)
        return (
            <div className="Wrapper" style={{ background: '#f9f9f9' }}> 
            <SideDrawer visibleMenu={this.state.visibleMenu} />
            <div className="wrapper-container-menu">
                <div className="logo">
                    <h2 id="wrapper-title" style={{ zIndex: '1000' }} className="wrapper-title"><Link  to="/Network" style={{ color: 'black', textTransform: 'lowercase' }}>govea.</Link></h2>
                    <h4 className="wrapper-subtitle-">built / designed by alexander govea</h4>
                </div> 
                <ul className="wrapper-menu">
                    <NavLink to="/Network" activeStyle={{ color: '#e3545f' }} style={{color: 'black', textTransform: 'lowercase' }}><li className="wrapper-menu-item">About</li></NavLink>
                    <NavLink to="/Projects" activeStyle={{ color: '#e3545f' }} style={{ color: 'black', textTransform: 'lowercase' }}><li className="wrapper-menu-item">Work</li></NavLink>
                    <a href={Resume} target="_blank" style={{color: 'black', textTransform: 'lowercase' }}><li className="wrapper-menu-item">download resume.</li></a>
                </ul>
                <button onClick={this.toggleMenu} style={{ marginBottom: '5rem', zIndex: '10000000'}} className={`main-nav-toggle-button hamburger hamburger--elastic${this.state.visibleMenu ? ' is-active' : ''}`} type="button">
                    <span className="hamburger-box">
                    <span className="hamburger-inner"></span>
                    </span>
                </button>
            </div>  

            <section className="sideways-right-nav-wrapper animated fadeIn" >
                    <ul className="navigation-right-wrapper" style={{cursor: 'default'}}>
                        <Link className="navigation-link-right" style={{
                            cursor: 'default'
                        }} to="/Network" >
                            <li className="navigation-list-right">home</li>
                        </Link>
                        <Link className="navigation-link-right" style={{
                            cursor: 'default'
                        }} to="/Network" >
                            <li className="navigation-list-right">all projects</li>
                        </Link>
                        <Link className="navigation-link-right" style={{
                            cursor: 'default'
                        }}  to="/Network">
                            <li className="navigation-list-right">discover more</li> 
                        </Link>
                        <Link className="navigation-link-right" style={{
                            cursor: 'default'}}  to="/Network">
                            <li className="navigation-list-right">contact</li> 
                        </Link>
                    </ul>    
                </section>
                <section className="sideways-left-nav-wrapper">
                    <ul className="navigation-left-wrapper">
                        <Link  style={{ cursor: 'default', transform: 'rotate(-90deg)' }}  className="navigation-link-left" to="/Projects" >
                            <li className="navigation-list-left"><i id="arrow__nav" style={{ color: '#000000', transform: 'rotate(-90deg)' }} className="arrow up icon"></i></li>
                        </Link>
                        <Link 
                            activeClass="active"
                            to="/Network"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration= {500}
                            style={{ cursor: 'default', transform: 'rotate(-90deg)' }}  className="navigation-link-left" to="/Network">
                            <li className="navigation-list-left"><i id="arrow__nav" style={{ color: '#000000', transform: 'rotate(-90deg)' }} className="arrow down icon"></i></li> 
                        </Link>
                        <Link style={{ cursor: 'default', color: 'black' }} className="navigation-link-left" to="/Network" >
                            <li className="navigation-list-left">connect</li>
                        </Link>
                        <Link style={{ cursor: 'default', color: 'black' }} className="navigation-link-left" to="/Network">
                            <li className="navigation-list-left">contact</li> 
                        </Link>
                    </ul>  
                </section>
            </div>
        );
    }
}

export default Wrapper;