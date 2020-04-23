import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

class AdminPage extends React.Component{
    render() {
        return (
            <div>
                <AdminContainer/>
                <LogOutBtn/>
            </div>
        );
    }
}

export default AdminPage;