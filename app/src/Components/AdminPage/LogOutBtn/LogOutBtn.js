import React from "react";
import './logOutBtn.css';
import {getBaseUrlApp} from '../../../index'

class LogOutBtn extends React.Component {
    handleClick = () => {
        localStorage.clear();
        window.location.replace(getBaseUrlApp())
    };

    render() {
        return (
            <button className="logOutBtn" onClick={this.handleClick}>Log Out</button>
        )
    }
}

export default LogOutBtn;