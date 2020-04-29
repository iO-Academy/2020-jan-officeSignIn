import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTable from "../VisitorsTable/VisitorsTable";
import MessageBox from "../../LandingPage/MainContainer/MessageBox/MessageBox"

class AdminContainer extends React.Component {
    state = {
        response: ''
    };

    updateResponse = (newResponse) => {
        this.setState({response : newResponse})
    };

    render() {
        return (
            <main>
                <div className="adminContainer">
                    <Logo/>
                    <VisitorsTable updateResponse={this.updateResponse}/>
                    <MessageBox response={this.state.response}/>
                </div>
            </main>
        )
    }
}

export default AdminContainer;