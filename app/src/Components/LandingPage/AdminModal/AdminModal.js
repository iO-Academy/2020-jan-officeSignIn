import React from "react";
import './AdminModal.css';

class AdminModal extends React.Component {
    constructor(props) {
        super(props);
        let token = '';

        if(localStorage.getItem('bearerToken')) {
            token = localStorage.getItem('bearerToken')
        }

        this.state = {
            passcode: '',
            modalClass: 'hidden',
            response: '',
            bearerToken: token
        };
    }

    updateToken = (fetchedToken) => {
        let updatedToken = fetchedToken;
        this.setState({bearerToken: updatedToken});
        localStorage.setItem('bearerToken', updatedToken)
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

    captureInput = (e, keyPressed, passcodeUpdate) => {
            let passcodeValue = {};
                passcodeValue['passcode'] = passcodeUpdate + keyPressed;
        this.setState(passcodeValue)
    };

    handleLogin = async (e)=>{
        let dataToSend = {
            'Passcode': this.state.passcode
        };
        this.setState({passcode: ''});
        await this.postPasscodeToDb(localStorage.getItem('apiUrl') + 'adminLogin', 'POST', dataToSend);
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
        } else if(responseData.success === true) {
            this.updateToken(responseData.token);
            window.location.replace(localStorage.getItem('appUrl') + 'AdminPage');
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
        let visibleState = 'adminModal ' + this.state.modalClass;
        return (
                <div className={visibleState}>
                    <span className="instructions">Please enter the admin passcode</span>
                    <div className="keypadContainer">
                        <div className="keypadRow">
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'1', this.state.passcode)}><span>1</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'2', this.state.passcode)}><span>2</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'3', this.state.passcode)}><span>3</span></button>
                        </div>
                        <div className="keypadRow">
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'4', this.state.passcode)}><span>4</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'5', this.state.passcode)}><span>5</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'6', this.state.passcode)}><span>6</span></button>
                        </div>
                        <div className="keypadRow">
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'7', this.state.passcode)}><span>7</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'8', this.state.passcode)}><span>8</span></button>
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'9', this.state.passcode)}><span>9</span></button>
                        </div>
                        <div className="keypadRow">
                            <button className="keypadBtn" onClick={(e) => this.captureInput(e,'0', this.state.passcode)}><span>0</span></button>
                            <button className="logInBtn" onClick={this.handleLogin}><span>Log In</span></button>
                        </div>
                    </div>
                    <button className="closeModalBtn" onClick={this.props.updateModalVisible}>X</button>
                    <div className="responseMessage">{this.state.response}</div>
                </div>
        )
    }
}

export default AdminModal;