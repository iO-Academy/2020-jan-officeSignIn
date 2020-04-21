import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Name: '',
            Company: '',
            response: ''
        }
    }

    handleChangeName = (event) => {
        this.setState({Name: event.target.value});
    };
    handleChangeCompany = (event) => {
        this.setState({Company: event.target.value});
    };


    handleSignIn = async (e)=>{
        e.preventDefault();
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };
    console.log(dataToSend);
    await this.postSignInData('https', 'POST', dataToSend);

    };

    async postSignInData(url, requestMethod, dataToSend) {
       let requestData = JSON.stringify(dataToSend)

        const response = await fetch(url, {
            method: requestMethod.toUpperCase(),
            mode: 'no-cors',
            body: requestData,
            headers: {
            "Content-Type" : "application/json"
        }
    });
        let responseData = await response.json();
        this.setState({ response: responseData.Message });
        console.log(responseData);
    }

    render() {
        return (
            <form method="POST" onSubmit={this.handleSignIn}>
                <input id="Name" type="text" placeholder="Your first name and surname..." value={this.state.Name} onChange={this.handleChangeName} required/>
                <input id="Company" type="text" placeholder="Your organisation..." value={this.state.Company} onChange={this.handleChangeCompany}/>
                <input className="signInButton" type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default SigninForm;