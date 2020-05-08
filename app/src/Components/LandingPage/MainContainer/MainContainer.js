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
        setTimeout(()=> {
            this.clearResponse()
        }, 5000);
        this.setState({response : newResponse})
    };

    clearResponse = () => {
        this.setState({response : ''})
    };

    render() {
        return (
            <main>
                <div className="mainContainer">
                    <Logo/>
                    <SigninForm
                        updateResponse={this.updateResponse}
                        updateSignOutModalVisible={this.props.updateSignOutModalVisible}
                        getSignOutData={this.props.getSignOutData}
                    />
                    <MessageBox response={this.state.response}/>
                </div>
            </main>
        )
    }
}

export default MainContainer;