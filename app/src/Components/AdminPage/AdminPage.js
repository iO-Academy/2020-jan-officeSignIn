import React from "react";
import './adminPage.css';
import AdminContainer from "./AdminContainer/AdminContainer";
import LogOutBtn from "./LogOutBtn/LogOutBtn";

// let loggedIn=false;
//
// if (localStorage.getItem('bearerToken') !== '') {
//     loggedIn=true;
// } else {
//     loggedIn=false;
// }
// console.log(loggedIn)



class AdminPage extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            success: '',
            bearerToken: localStorage.getItem('bearerToken')
        };

        console.log(this.state.bearerToken)
    }

    componentDidMount() {
        this.fetchVisitors();
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
                <AdminContainer/>
            </div>
        );
    }
}

export default AdminPage;