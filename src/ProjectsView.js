import React from "react";
import '/Users/test/test/src/styles/ProjectsView.scss';
import { useSpring, animated, useTrail } from 'react-spring'


const ProjectsView = () => {
    const fade = useSpring({
      from: {
        opacity: 0
      },
      to: {
        opacity: 1
      }
    })

  return (
      <div >
          <animated.div className="main-container" style={{backgroundColor: 'white', fade}}>
            <div className="container-one"  >
              <img src={"https://cdn.dribbble.com/users/1343667/screenshots/5265526/showcase_2x.png"} /> 
            </div>
            <div className="container-two">
              <img src={"http://www.moneygossips.com/wp-content/uploads/2015/02/free-movie-sites-810x539.png"} /> 
            </div>
            <div className="container-three">
              <img src={"https://cdn.dribbble.com/users/1230012/screenshots/6469540/04_2x.png"} /> 
            </div>
            <div className="container-four">
              <img src={"https://cdn.dribbble.com/users/903897/screenshots/6461891/shot.png"} /> 
            </div>
            <div className="container-five">
                <img src={ "https://cdn.dribbble.com/users/515185/screenshots/6469560/shot-cropped-1557605297901.png"} /> 
            </div>
          </animated.div>
      </div>
  )
}


  export default ProjectsView;