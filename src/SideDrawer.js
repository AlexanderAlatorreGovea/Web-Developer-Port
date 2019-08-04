import React from 'react';
import './styles/SideDrawer.scss';
import { Link } from 'react-router-dom'; 

const SideDrawer = (props) => { 
    return (
        <div className="SideDrawer">
             <div className="navigation" id={`${props.visibleMenu ? 'active-menu' : ''}`}>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><Link to="/"   className="navigation__link"><span>01</span>Home</Link></li>
                        <li className="navigation__item"><Link to="/Projects"  className="navigation__link"><span>02</span>Projects</Link></li>
                        <li className="navigation__item"><Link to="/Network" className="navigation__link"><span>03</span>Contact</Link></li>
                        <li className="navigation__item"><Link to="/Network" className="navigation__link"><span>03</span>Discover</Link></li>
                        </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;
