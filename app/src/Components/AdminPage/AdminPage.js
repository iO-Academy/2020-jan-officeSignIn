import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";
import getBaseUrl from "../../index"
import {getBaseUrlApp} from "../../index";
import AdminModal from "../LandingPage/AdminModal/AdminModal";

class AdminPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            success: '',
            bearerToken: this.props.bearerToken,
            setBearerToken: this.props.setBearerToken,
            loggedIn: this.props.loggedIn,
            setLoggedIn: this.props.setLoggedIn
        };

        console.log(this.state.bearerToken)
    }

    componentDidMount() {
        if (this.state.loggedIn) {
            this.fetchVisitors();
        } else {
            window.location.replace('http://localhost:3000/')
        }

    }

    fetchVisitors = () => {
        fetch('http://localhost:8080/api/admin', {
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
                })
                if (!(this.state.success)) {
                    window.location.replace('http://localhost:3000')
                }
            })

    };

    render() {
        return (
            <div>
                <LogOutBtn/>
                <h1>All visitors currently signed in today:</h1>
                <AdminContainer
                    bearerToken={this.state.bearerToken}
                    setBearerToken={this.state.setBearerToken}
                    loggedIn={this.state.loggedIn}
                    setLoggedIn={this.state.setLoggedIn}
                />
            </div>
        );
    }
}

export default AdminPage;