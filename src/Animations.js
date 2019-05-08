import React from 'react';
import { useSpring, animated } from "react-spring";
import { useState } from 'react';

const Nav = () => {


    return(
        <div className="checkout">
            <div className="checkout-left"/>
            <div className="checkout-right"/>
        </div>
    )
}














/*
import React from 'react';
import { useSpring, animated } from "react-spring";
import { useState } from 'react';


const Animations = () => {
    const [isToggled, setToggle] = useState(false);

    const fade = useSpring({
        opacity: isToggled ? 1 :0
    })


    console.log(fade);
    return(
        <div className="animations" style={fade}>
            <header>
            <animated.img style={fade} 
                src="https://i.pinimg.com/564x/67/97/6f/67976fe1b5958701f09ed747c158b19a.jpg"
                
                />
                <button onClick={() => setToggle(!isToggled)}>ToggleBtn</button>
            </header>
        </div>
    )
}

export default Animations;*/