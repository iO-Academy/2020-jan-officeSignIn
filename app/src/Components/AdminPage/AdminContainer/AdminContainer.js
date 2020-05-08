import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTable from "../VisitorsTable/VisitorsTable";
import MessageBox from "../../LandingPage/MainContainer/MessageBox/MessageBox"
import LogOutBtn from "../LogOutBtn/LogOutBtn";

class AdminContainer extends React.Component {
    state = {
        response: ''
    };

    updateResponse = (newResponse) => {
        this.setState({response : newResponse})
    };

    updateSignOutResponse = (newResponse) => {
        setTimeout(()=> {
            this.clearResponse()
        }, 5000);
        this.setState({response : newResponse})
    };

    clearResponse = () => {
        this.setState({response : ''})
    };

    render() {
        return (
            <main>
                <div className="adminContainer">
                    <Logo/>
                    <div className="adminContainerButtons">
                        <LogOutBtn/>
                    </div>
                    <MessageBox response={this.state.response}/>
                    <VisitorsTable updateResponse={this.updateResponse} updateSignOutResponse={this.updateSignOutResponse}/>
                </div>
            </main>
        )
    }
}

export default AdminContainer;