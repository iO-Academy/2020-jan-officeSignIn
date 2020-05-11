import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTable from "../VisitorsTable/VisitorsTable";
import MessageBox from "../../LandingPage/MainContainer/MessageBox/MessageBox"
import LogOutBtn from "../LogOutBtn/LogOutBtn";
import TableSelector from "../TableSelector/TableSelector";

class AdminContainer extends React.Component {
    state = {
        response: '',
        adminContainerVisible: 'hidden'
    };

    setAdminContainerVisible = () => {
        this.setState({adminContainerVisible: 'visible'})
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
                    <TableSelector/>
                    <div className="adminContainerButtons">
                        <LogOutBtn/>
                    </div>
                    <MessageBox
                        response={this.state.response}
                    />
                    <VisitorsTable
                        updateResponse={this.updateResponse}
                        updateSignOutResponse={this.updateSignOutResponse}
                        setAdminContainerVisible={this.setAdminContainerVisible}
                    />
                </div>
            </main>
        )
    }
}

export default AdminContainer;