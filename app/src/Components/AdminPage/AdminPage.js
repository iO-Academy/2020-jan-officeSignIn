import React from "react";
import './adminPage.css';
import VisitorsTable from "./VisitorsTable/VisitorsTable";
import MainContainer from "../Components/LandingPage/MainContainer/MainContainer";

class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <h1>All visitors currently signed in today:</h1>
                <MainContainer/>
            </div>
        );
    }
}

export default AdminPage;