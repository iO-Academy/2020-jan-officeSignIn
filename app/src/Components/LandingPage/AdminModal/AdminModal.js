import React from "react";
import './AdminModal.css';

class AdminModal extends React.Component {
    state = {
        keyCode: ''
    };

    render() {
        return (
                <div className="adminModal">
                    <span className="instructions">Please enter your 4 digit key</span>
                    <div className="keypadContainer">
                        <div className="keypadRow">
                            <div className="keypadBtn"><span>1</span></div>
                            <div className="keypadBtn"><span>2</span></div>
                            <div className="keypadBtn"><span>3</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn"><span>4</span></div>
                            <div className="keypadBtn"><span>5</span></div>
                            <div className="keypadBtn"><span>6</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn"><span>7</span></div>
                            <div className="keypadBtn"><span>8</span></div>
                            <div className="keypadBtn"><span>9</span></div>
                        </div>
                        <div className="keypadRow">
                            <div className="keypadBtn"><span>0</span></div>
                            <div className="logInBtn"><span>Log In</span></div>
                        </div>
                    </div>
                    <button className="closeModalBtn">X</button>
                </div>
        )
    }
}

export default AdminModal;