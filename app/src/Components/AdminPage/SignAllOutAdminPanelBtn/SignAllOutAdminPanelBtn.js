import React from "react";
import '../../LandingPage/SignAllOutBtn/signAllOutBtn.css'

class SignAllOutAdminPanelBtn extends React.Component {
    handleClick = () => {
        console.log('Sign all out button clicked!')
    };

    render() {
        return (
            <button className="signAllOutBtn btnHoverEffectOrange" onClick={this.handleClick}>Sign All Out</button>
        )
    }
}

export default SignAllOutAdminPanelBtn;