import React from "react";
import './logOutBtn.css';

class LogOutBtn extends React.Component {
    handleClick = () => {
        if (!localStorage.getItem('bearerToken')) {
            localStorage.removeItem('bearerToken');
        }
        window.location.replace(localStorage.getItem('appUrl'))
    };

    render() {
        return (
            <button className="logOutBtn btnHoverEffectOrange" onClick={this.handleClick}>Log Out</button>
        )
    }
}

export default LogOutBtn;
