import React from "react";
import './AdminModal.css';

class AdminModal extends React.Component {
    state = {
        passcode: ''
    };

    captureInput = (e,keyPressed, passcodeUpdate) => {
            let passcodeValue = {}
                passcodeValue['passcode'] = passcodeUpdate + keyPressed
        this.setState(passcodeValue)
        console.log(passcodeValue)
    }

    render() {
        return (
                <div className="adminModal"  style={{display: this.props.modalVisible ? 'block' : 'none'}}>
                    <span className="instructions">Please enter the admin passcode</span>
                    <div className="keypadContainer">
                        <div className="keypadRow">
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'1', this.state.passcode)}><span>1</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'2', this.state.passcode)}><span>2</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'3', this.state.passcode)}><span>3</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'4', this.state.passcode)}><span>4</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'5', this.state.passcode)}><span>5</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'6', this.state.passcode)}><span>6</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'7', this.state.passcode)}><span>7</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'8', this.state.passcode)}><span>8</span></div>
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'9', this.state.passcode)}><span>9</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn" onClick={(e) => this.captureInput(e,'0', this.state.passcode)}><span>0</span></div>
                            <div className="logInBtn"><span>Log In</span></div>
                        </div>
                    </div>
                    <button className="closeModalBtn">X</button>
                </div>
        )
    }
}

export default AdminModal;