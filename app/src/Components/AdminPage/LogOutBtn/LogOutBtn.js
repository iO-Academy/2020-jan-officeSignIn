import React from "react";
import './logOutBtn.css';

class LogOutBtn extends React.Component {
    handleClick = () => {
        localStorage.clear();
        window.location.replace('http://localhost:3000/')
    };

    render() {
        return (
            <button className="logOutBtn" onClick={this.handleClick}>Log Out</button>
        )
    }
}

export default LogOutBtn;