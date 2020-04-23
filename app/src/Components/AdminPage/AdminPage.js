import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <LogOutBtn/>
                <h1>All visitors currently signed in today:</h1>
                <AdminContainer/>
            </div>
        );
    }
}

export default AdminPage;