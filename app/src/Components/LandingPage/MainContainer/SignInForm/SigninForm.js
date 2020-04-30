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

        await this.handleFetch(
            localStorage.getItem('apiUrl') + 'api/visitorSignIn',
            'POST',
            dataToSend
        );

        this.setState({Name: ''});
        this.setState({Company: ''})
    };

    handleSignOut = async (e) =>{
        e.preventDefault();
        let dataToSend = {
            'Name': this.state.Name,
            'Company': this.state.Company,
        };

        // await this.handleFetch(
        //     localStorage.getItem('apiUrl') + 'api/visitorSignOut',
        //     'PUT',
        //     dataToSend
        // );

        //console logs to check handler working and ready to run fetch once api route built
        console.log('Signing out...');
        console.log(`data values: ${dataToSend.Name} ${dataToSend.Company}`);

        this.setState({Name: ''});
        this.setState({Company: ''})
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
        this.props.updateResponse(responseData.Message);
    };

    render() {
        return (
            <form>
                <input id="Name" type="text" placeholder="Your first name and surname..."
                       value={this.state.Name}
                       onChange={(e) => this.handleUpdate(e, 'Name')}
                       required
                />
                <input id="Company" type="text" placeholder="Your organisation..."
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