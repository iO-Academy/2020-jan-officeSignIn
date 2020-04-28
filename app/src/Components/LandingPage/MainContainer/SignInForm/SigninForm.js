import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    state = {
        Name: '',
        Company: ''
    };

    handleUpdate = (e, stateValue) => {
        let updatedData = {};
        updatedData[stateValue] = e.target.value;
        this.setState(updatedData);
    };

    handleSignIn = async (e)=>{
        e.preventDefault();
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };

        await this.postVisitorToDb( localStorage.getItem('apiUrl') + 'api/visitorSignIn',
            'POST',
            dataToSend);
    };

    postVisitorToDb = async (url, requestMethod, dataToSend) => {
        let requestData = JSON.stringify(dataToSend);
        const response = await fetch(url, {
            method: requestMethod.toUpperCase(),
            body: requestData,
            headers: {
            "Content-Type" : "application/json"
        }
    });
         let responseData = await response.json();
         this.props.updateResponse(responseData.Message);
    };

    render() {
        return (
            <form method="POST" onSubmit={this.handleSignIn}>
                <input id="Name" type="text" placeholder="Your first name and surname..."
                       value={this.state.Name}
                       onChange={(e) => this.handleUpdate(e, 'Name')}
                       required
                />
                <input id="Company" type="text" placeholder="Your organisation..."
                       value={this.state.Company}
                       onChange={(e) => this.handleUpdate(e, 'Company')}
                />
                <input className="signInButton" type="submit" value="Sign In"/>
            </form>
            )
        }
}

export default SigninForm;