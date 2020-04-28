import React from "react";
import './logOutBtn.css';

class LogOutBtn extends React.Component {
    handleClick = () => {
        localStorage.removeItem('bearerToken');
        window.location.replace(localStorage.getItem('appUrl'))
    };

    render() {
        return (
            <button className="logOutBtn" onClick={this.handleClick}>Log Out</button>
        )
    }
}

export default LogOutBtn;
