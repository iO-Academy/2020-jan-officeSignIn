import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

class AdminPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            success: '',
            bearerToken: localStorage.getItem('bearerToken'),
            apiUrl: localStorage.getItem('apiUrl'),
            appUrl: localStorage.getItem('appUrl'),
        };
    }

    componentDidMount() {
        if (localStorage.getItem('bearerToken') === null) {
            return window.location.replace(this.state.appUrl)
        }

        setTimeout(() => {

            window.location.replace(this.state.appUrl)
        }, 300000)
    }

    render() {
        return (
            <div>
                <div className="adminPageBackgroundColor"></div>
                <LogOutBtn/>
                <h1 className={'adminPage'}>All visitors currently signed in today:</h1>
                <AdminContainer/>
            </div>
        );
    }
}

export default AdminPage;
