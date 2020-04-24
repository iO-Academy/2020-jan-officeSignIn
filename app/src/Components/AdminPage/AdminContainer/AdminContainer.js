import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTable from "../VisitorsTable/VisitorsTable";
import AdminModal from "../../LandingPage/AdminModal/AdminModal";

class AdminContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            bearerToken: this.props.bearerToken,
            setBearerToken: this.props.setBearerToken,
            loggedIn: this.props.loggedIn,
            setLoggedIn: this.props.setLoggedIn
        };
    }

    render() {
        return (
            <main>
                <div className="adminContainer">
                    <Logo/>
                    <VisitorsTable
                        bearerToken={this.state.bearerToken}
                        setBearerToken={this.state.setBearerToken}
                        loggedIn={this.state.loggedIn}
                        setLoggedIn={this.state.setLoggedIn}
                    />
                </div>
            </main>
        )
    }
}

export default AdminContainer;