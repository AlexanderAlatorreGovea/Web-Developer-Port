import React from 'react';


class List extends React.Component{
    render() {
        return(
        <div>
            <ul className="tog animated fadeIn" ref={this.ulRef}>
            <li className="about animated fadeInDown li" onClick={this.toggleImg} key={'about'} name='About'>About</li>
            <li className="projects-li animated fadeInDown li" onClick={this.setActiveList } key={'Projects'} name='Projects'>Projects</li>
            <li className="testimonials-li animated fadeInDown li" onClick={this.setActiveList} key={'Testimonials'} name='Testimonials'>Testimonials</li>
            <li className="contact-li animated fadeInDown li" onClick={this.setActiveList } key={'Contact'} name='Contact'
            >Contact</li>
            <li className="resume-li animated fadeInDown li"
            onClick={this.setActiveList }
            key="Resume"
            >Resume</li> 
            </ul>
        </div>
    )
    }
}

export default List;