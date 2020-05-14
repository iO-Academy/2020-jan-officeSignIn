import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTableSignedIn from "../VisitorsTableSignedIn/VisitorsTableSignedIn";
import MessageBox from "../../LandingPage/MainContainer/MessageBox/MessageBox"
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import TableSelector from "../TableSelector/TableSelector";
import VisitorsTableSignedOut from "../VisitorsTableSignedOut/VisitorsTableSignedOut";

class AdminContainer extends React.Component {
    state = {
        response: '',
        adminContainerVisible: 'hidden',
        signedInTableVisible: true,
        signedOutTableVisible: false
    };

    setAdminContainerVisible = () => {
        this.setState({adminContainerVisible: 'visible'})
    };

    viewSignedInVisitorTable = () => {
        this.setState({
            signedInTableVisible: true,
            signedOutTableVisible: false
        });
    };

    viewSignedOutVisitorTable = () => {
        this.setState({
            signedInTableVisible: false,
            signedOutTableVisible: true
        });
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
        const adminContainerClass = 'adminContainer ' + this.state.adminContainerVisible;
        return (
            <main>
                <div className={adminContainerClass}>
                    <Logo/>
                    <div className="adminContainerButtons">
                        <TableSelector
                            signedInTableVisible={this.state.signedInTableVisible}
                            signedOutTableVisible={this.state.signedOutTableVisible}
                            viewSignedInVisitorTable={this.viewSignedInVisitorTable}
                            viewSignedOutVisitorTable={this.viewSignedOutVisitorTable}
                        />
                        <LogOutBtn/>
                    </div>
                    <MessageBox
                        response={this.state.response}
                    />
                    <VisitorsTableSignedIn
                        updateResponse={this.updateResponse}
                        updateSignOutResponse={this.updateSignOutResponse}
                        setAdminContainerVisible={this.setAdminContainerVisible}
                        signedInTableVisible={this.state.signedInTableVisible}
                    />
                    <VisitorsTableSignedOut
                        signedOutTableVisible={this.state.signedOutTableVisible}
                    />
                </div>
            </main>
        )
    }
}

export default AdminContainer;