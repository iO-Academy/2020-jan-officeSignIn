import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";

//import the main container and admin button

class LandingPage extends React.Component {
    render() {
        return (
            <div>
                <MainContainer/>
            </div>
        )
    }
}

export default LandingPage;