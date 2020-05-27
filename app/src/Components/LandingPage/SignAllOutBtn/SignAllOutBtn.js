import React from "react";
import './signAllOutBtn.css';

class SignAllOutBtn extends React.Component {
    state = {
        signAllOutBtnVisibilityClass: 'visible'
    };

    componentDidUpdate(prevProps) {
        if (prevProps.adminBtnVisible !== this.props.adminBtnVisible) {
            if(this.props.adminBtnVisible) {
                this.setState({adminBtnClass: 'visible'})
            } else {
                this.setState({adminBtnClass: 'hidden'})
            }
        }
    }


    render() {
        let signAllOutBtnVisibilityClass = 'signAllOutBtn btnHoverEffectOrange ' + this.state.signAllOutBtnVisibilityClass
        return (
            <button className={signAllOutBtnVisibilityClass} onClick={this.handleClick}>Sign All Out</button>
        )
    }
}

export default SignAllOutBtn;