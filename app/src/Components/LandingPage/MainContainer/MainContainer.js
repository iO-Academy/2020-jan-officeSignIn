import React from "react";
import './MainContainer.css';
import Logo from './Logo/Logo';
import SigninForm from "./SignInForm/SigninForm";
import MessageBox from "./MessageBox/MessageBox";

class MainContainer extends React.Component {
    state = {
        response: ''
    };

    updateResponse = (newResponse) => {
            this.setState({ response : newResponse })
    };

    render() {
        return (
                <main>
                    <div className="mainContainer">
                        <Logo/>
                        <SigninForm updateResponse={this.updateResponse}/>
                        <MessageBox response={this.state.response}/>
                    </div>
                </main>
            )
    }
}

export default MainContainer;