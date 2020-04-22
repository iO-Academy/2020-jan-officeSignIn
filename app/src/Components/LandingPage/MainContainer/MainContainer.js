import React from "react";
import './MainContainer.css';
import Logo from './Logo/Logo';
import SigninForm from "./SignInForm/SigninForm";
import MessageBox from "./MessageBox/MessageBox";

class MainContainer extends React.Component {
    render() {
        return (
                <main>
                    <div className="mainContainer">
                        <Logo/>
                        <SigninForm/>
                        <MessageBox/>
                    </div>
                </main>
            )
    }
}

export default MainContainer;