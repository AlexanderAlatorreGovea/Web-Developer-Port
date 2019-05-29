import React from 'react';
import './ProjectsView.js';


class ProjectViewTop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {} 
     }

     componentDidMount() {
        document.querySelector('.number').classList.add('animated', 'fadeInUp', 'delay-3s')
        document.querySelector('.line').classList.add('animated', 'fadeInLeft', 'delay-4s')
        document.querySelector('.description').classList.add('animated', 'fadeInUp', 'delay-5s');
 
    }

      componentWillUnmount() {
        document.querySelector('.number').classList.remove('animated', 'fadeInUp','delay-3s' )
        document.querySelector('.line').classList.remove('animated', 'fadeInLeft', 'delay-4s')
        document.querySelector('.description').classList.remove('animated', 'fadeInUp', 'delay-5s');
    }

    render() {
        return (
        <div>       
            <div>
                <div className="top-container"
                    ref={this.topViewRef}
                >
                    <div className="number">
                        <span className="line " ></span>
                        <h2>1</h2>
                    </div>
                    <div className="description" >
                        <h1 className="title-one">what we do</h1>
                        <p className="dp paragraph">
                        Lorem ipsum dolor amet truffaut edison bulb marfa four loko food truck. 
                        Squid aesthetic tumblr poutine photo booth organic 90's lo-fi yr. Street art pork belly skateboard hella slow-carb, celiac whatever bicycle rights actually brooklyn. Offal deep v banjo tilde VHS af, thundercats snackwave selfies scenester etsy photo booth synth 
                        </p>      
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </div>
  )}
}


export default ProjectViewTop;