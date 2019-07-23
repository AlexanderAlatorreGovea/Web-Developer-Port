import React from 'react';
import './styles/SideDrawer.scss';

const SideDrawer = (props) => {
    return (
        <div className="SideDrawer">
             <div className="navigation" id={`${props.visibleMenu ? 'active-menu' : ''}`}>
                <div className="navigation__background">&nbsp;</div>
                <nav className="navigation__nav">
                    <ul className="navigation__list">
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>01</span>Home</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>02</span>Projects</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Contact</a></li>
                        <li className="navigation__item"><a href="#" className="navigation__link"><span>03</span>Discover</a></li>
                        </ul>
                </nav>
            </div>
        </div>
    );
};

export default SideDrawer;
