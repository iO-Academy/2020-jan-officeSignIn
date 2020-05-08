import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Company: ''
        };
    }

    handleUpdate = (e, stateValue) => {
        let updatedData = {};
        updatedData[stateValue] = e.target.value;
        this.setState(updatedData);
    };

    handleSignIn = async (e) =>{
        e.preventDefault();
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };

        let responseData = await this.handleFetch(
            localStorage.getItem('apiUrl') + 'api/visitorSignIn',
            'POST',
            dataToSend
        );

        this.setState({
            Name: '',
            Company: ''
        });

        if (responseData.Success === false) {
            this.props.updateResponse('Name required to sign in.')
        }

    };

    handleSignOut = async (e) =>{
        e.preventDefault();
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };

        let responseData = await this.handleFetch(
            localStorage.getItem('apiUrl') + 'api/visitorSignOut',
            'PUT',
            dataToSend
        );

        this.setState({
            Name: '',
            Company: ''
        });

        if (responseData.Message === 'Multiple matches found') {
            this.props.updateResponse(responseData.Message);
            return responseData.Message
        } else if (responseData.Success === false) {
            this.props.updateResponse('Unable to sign out, name not found.')
        }

    };

    handleFetch = async (url, requestMethod, dataToSend) => {
        let requestData = JSON.stringify(dataToSend);

        const response = await fetch(url, {
            method: requestMethod.toUpperCase(),
            body: requestData,
            headers: {
            "Content-Type" : "application/json"
            }
        });

        let responseData = await response.json();

        if (responseData.Success) {
            setTimeout( () => {
                setTimeout(() => {
                    this.props.toggleSuccessTick()
                },400);
                this.props.setSuccessTickHidden()
            }, 2000);
            this.props.toggleSuccessTick()
        }

        if (responseData.Data !== undefined) {
            this.props.getSignOutData(responseData.Data);
        }

        return responseData;
    };

    render() {
        return (
            <form className="signInForm">
                <input id="Name" type="text" className="signInFormInput" placeholder="Your first name and surname..."
                       value={this.state.Name}
                       onChange={(e) => this.handleUpdate(e, 'Name')}
                       required
                />
                <input id="Company" type="text" className="signInFormInput" placeholder="Your organisation..."
                       value={this.state.Company}
                       onChange={(e) => this.handleUpdate(e, 'Company')}
                />
                <input className="visitorFormButton" type="submit" value="Sign In" onClick={this.handleSignIn}/>
                <input className="visitorFormButton signOutBtn" type="submit" value="Sign Out" onClick={this.handleSignOut}/>
            </form>
            )
        }
}

export default SigninForm;