import React from "react";
import './adminContainer.css';
import Logo from '../../LandingPage/MainContainer/Logo/Logo';
import VisitorsTable from "../VisitorsTable/VisitorsTable";

class AdminContainer extends React.Component {
    render() {
        return (
            <main>
                <div className="adminContainer">
                    <h1>All visitors currently signed in today:</h1>
                    <Logo/>
                    <VisitorsTable/>
                </div>
            </main>
        )
    }
}

export default AdminContainer;