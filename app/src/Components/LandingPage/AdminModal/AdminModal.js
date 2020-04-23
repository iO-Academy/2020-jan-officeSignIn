import React from "react";
import './AdminModal.css';
import getBaseUrl from "../../../index";

class AdminModal extends React.Component {
    state = {
        passcode: '',
        modalClass: 'hidden',
        response: ''
    };

    componentDidUpdate(prevProps) {
        if (prevProps.modalVisible !== this.props.modalVisible) {
            if(this.props.modalVisible) {
                this.setState({modalClass: 'visible'})
            } else {
                this.setState({modalClass: 'hidden'})
            }
        }
    }

    captureInput = (e,keyPressed, passcodeUpdate) => {
            let passcodeValue = {}
                passcodeValue['passcode'] = passcodeUpdate + keyPressed
        this.setState(passcodeValue)
        console.log(passcodeValue)
    }

    handleLogin = async (e)=>{
        console.log(this.state.passcode)
        console.log(getBaseUrl)
        let dataToSend = {
            'Passcode': this.state.passcode
        };
        await this.postPasscodeToDb(getBaseUrl + 'adminLogin', 'POST', dataToSend);
    };

    postPasscodeToDb = async (url, requestMethod, dataToSend) => {
        let requestData = JSON.stringify(dataToSend);
        const response = await fetch(url, {
            method: requestMethod.toUpperCase(),
            body: requestData,
            headers: {
                "Content-Type" : "application/json"
            }
        });
        let responseData = await response.json();
        if(responseData.success === false) {
            this.updateResponse(responseData.message);
            console.log('failure')
        } else if(responseData.success === true) {
            // localStorage.setItem(responseData.token)
            console.log('success')
        }
    };

    updateResponse = (newResponse) => {
        setTimeout(()=> {
            this.clearResponse()
        }, 3000);
        this.setState({response : newResponse})
    };

    clearResponse = () => {
        this.setState({response : ''})
    };

    render() {
        let visibleState = 'adminModal ' + this.state.modalClass
        return (
                <div className={visibleState}>
                    <span className="instructions">Please enter the admin passcode</span>
                    <span className="responseMessage"></span>
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
                            <div className="logInBtn" onClick={this.handleLogin}><span>Log In</span></div>
                        </div>
                    </div>
                    <button className="closeModalBtn" onClick={this.props.updateModalVisible}>X</button>
                </div>
        )
    }
}

export default AdminModal;