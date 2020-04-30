import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            Name: '',
            Company: '',
            submitPath: ''
        };
    }

    handleUpdate = (e, stateValue) => {
        let updatedData = {};
        updatedData[stateValue] = e.target.value;
        this.setState(updatedData);
    };

    handleSignIn = async () =>{
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };

        await this.postVisitorToDb(
            localStorage.getItem('apiUrl') + 'api/visitorSignIn',
            'POST',
            dataToSend);

        this.setState({Name: ''});
        this.setState({Company: ''})
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

    submitForm = (e) => {
        e.preventDefault();
        let path = this.state.submitPath;
        if (path === 'signIn') {
            this.handleSignIn();
        } else if (path === 'Sign Out') {
            //call handleSignOut
        } else {
            return false;
        }
    };

    setSubmitPathSignIn = () => {
        this.setState({submitPath: 'signIn'});
        console.log(this.state.submitPath)
    };

    setSubmitPathSignOut = () => {

    };

    render() {
        return (
            <form onSubmit={this.submitForm}>
                <input id="Name" type="text" placeholder="Your first name and surname..."
                       value={this.state.Name}
                       onChange={(e) => this.handleUpdate(e, 'Name')}
                       required
                />
                <input id="Company" type="text" placeholder="Your organisation..."
                       value={this.state.Company}
                       onChange={(e) => this.handleUpdate(e, 'Company')}
                />
                <input className="visitorFormButton" type="submit" value="Sign In" onClick={this.setSubmitPathSignIn}/>
                <input className="visitorFormButton signOutBtn" type="submit" value="Sign Out"/>
            </form>
            )
        }
}

export default SigninForm;