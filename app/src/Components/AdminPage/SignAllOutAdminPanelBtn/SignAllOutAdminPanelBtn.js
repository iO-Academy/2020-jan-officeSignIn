import React from "react";
import '../../LandingPage/SignAllOutBtn/signAllOutBtn.css'

class SignAllOutAdminPanelBtn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bearerToken: localStorage.getItem('bearerToken'),
            apiUrl: localStorage.getItem('apiUrl')
        }
    }

    handleClick = async () => {
        let signAllOutResponse = await this.signAllOut();

        if (signAllOutResponse.Success) {
            if (!this.props.updateSignedInTableState) {
                this.props.toggleUpdateSignedInTable();
            }
        }
    };

    signAllOut = async () => {
        const url = localStorage.getItem('apiUrl') + 'api/signOutVisitors';
        const bodyData = JSON.stringify({ "Option" : "all-current" })
        const response = await fetch(url, {
            method: 'PUT',
            body: bodyData,
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })

        return await response.json();
    }

    render() {
        return (
            <button className="signAllOutBtn btnHoverEffectOrange" onClick={this.handleClick}>Sign All Out</button>
        )
    }
}

export default SignAllOutAdminPanelBtn;