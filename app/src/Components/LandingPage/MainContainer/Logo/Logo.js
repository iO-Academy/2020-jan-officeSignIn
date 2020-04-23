import React from "react";
import './Logo.css';
import MaydenLogo from './maydenacademylogo.png';

class Logo extends React.Component {
    render() {
        return(
            <img src={MaydenLogo} alt="maydenLogo"/>
        )
    }
}

export default Logo;