import React from 'react';
import '/Users/test/test/src/styles/Preloader.scss'

class Preloader extends React.Component{
    constructor(props) {
        super(props)

    }

    componentDidMount() {
        setTimeout(() => {
    
          document.querySelector('.loader-container').style.transition = 'opacity 5s';
          document.querySelector('.loader-container').style.opacity = '0';
    
          setTimeout(() => {
            document.querySelector('.loader-container').remove();
          }, 1000);
    
        }, 2000);
      }

    render() {
        return(
        <div className="loader-container">
            <div class="loader">
                <div class="inner one"></div>
                <div class="inner two"></div>
                <div class="inner three"></div>
            </div>
        </div>
    )
    }
}

export default Preloader; 