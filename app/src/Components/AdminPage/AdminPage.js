import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <h1>All visitors currently signed in today:</h1>
                <AdminContainer/>
                <LogOutBtn/>
            </div>
        );
    }
}

export default AdminPage;