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
            logAdminIn: this.props.logAdminIn,
            loggedIn: this.props.loggedIn,
        };

        console.log(this.state.bearerToken)
        console.log(this.state.loggedIn)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bearerToken !== this.props.bearerToken || prevProps.loggedIn !== this.props.loggedIn) {
            this.setState({bearerToken: this.props.bearerToken, loggedIn: this.props.loggedIn})
        }
    }


    componentDidMount() {
        if (this.state.loggedIn) {
            this.fetchVisitors();
        } else {
            console.log('get out!!')
            // window.location.replace('http://localhost:3000/')
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
                    console.log('Get out!!!')
                    //window.location.replace('http://localhost:3000')
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
                    logAdminIn={this.logAdminIn}
                    loggedIn={this.state.loggedIn}
                />
            </div>
        );
    }
}

export default AdminPage;