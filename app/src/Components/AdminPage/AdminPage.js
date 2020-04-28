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
        this.fetchVisitors();

        setTimeout(() => {
            localStorage.removeItem('bearerToken');
            window.location.replace(this.state.appUrl)
        }, 300000)
    }

    fetchVisitors = () => {
        fetch(this.state.apiUrl + 'api/admin', {
            method: 'GET',
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : "Bearer " + this.state.bearerToken
            }
        })
            .then(data=>data.json())
            .then((data)=>{
                this.setState({
                    success: data.Success
                });
                if (!(this.state.success)) {
                    window.location.replace(this.state.appUrl)
                }
            })

    };

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