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
            logAdminIn: this.props.logAdminIn,
            loggedIn: this.props.loggedIn,
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bearerToken !== this.props.bearerToken || prevProps.loggedIn !== this.props.loggedIn) {
            this.setState({bearerToken: this.props.bearerToken, loggedIn: this.props.loggedIn})
        }
    }


    render() {
        return (
            <main>
                <div className="adminContainer">
                    <Logo/>
                    <VisitorsTable
                        bearerToken={this.state.bearerToken}
                        loggedIn={this.state.loggedIn}
                        logAdminIn={this.state.logAdminIn}
                    />
                </div>
            </main>
        )
    }
}

export default AdminContainer;