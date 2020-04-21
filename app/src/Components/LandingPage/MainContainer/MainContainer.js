import React from "react";
import './MainContainer.css';
import Logo from './Logo/Logo';
import SigninForm from "./SignInForm/SigninForm";

class MainContainer extends React.Component {
    render() {
        return (
                <main>
                    <div className="mainContainer">
                        <Logo/>
                        <SigninForm/>
                    </div>
                </main>
            )

    }
}

export default MainContainer;