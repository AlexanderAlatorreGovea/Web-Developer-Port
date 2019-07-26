import React from 'react';
import './styles/projectViewTop.scss';

class ProjectViewTop extends React.Component {
    render() {
        return (
        <div className="ProjectViewTop">       
            <div>
                <div className="top-container"
                    ref={this.topViewRef}
                >
                    <div className="number">
                        <span className="line wow fadeInLeft" ></span>
                        <h2>1</h2>
                    </div>
                    <div className="description" >
                        <h1 className="title-one">what I learned</h1>
                        <div className="paragraph wow fadeInUp">
                        The goal of working on these projects was to continously learn different techonologies and dive into various aspects of front-end development. After completing them, I feel completely confident that I can deliver value to any company that decides to give me an opportunity to demonstrate my skills. 
                        I hope you Enjoy my projects, as I had a lot of fun making them. 
                        </div>      
                    </div>
                    <div>
                    </div>

                </div>
            </div>
        </div>
  )} 
}


export default ProjectViewTop;