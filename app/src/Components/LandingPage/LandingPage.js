import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Mayden Academy Visitor sign-in</h1>
                <MainContainer/>
                <AdminBtn/>
            </div>
        )
    }
}

export default LandingPage;