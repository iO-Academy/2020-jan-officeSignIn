import React from "react";
import './adminPage.css';
import VisitorsTable from "./VisitorsTable/VisitorsTable";

class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <h1>All visitors currently signed in today:</h1>
                <VisitorsTable/>
            </div>
        );
    }
}

export default AdminPage;