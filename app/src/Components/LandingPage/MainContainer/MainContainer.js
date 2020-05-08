import React from "react";
import './MainContainer.css';
import Logo from './Logo/Logo';
import SigninForm from "./SignInForm/SigninForm";
import MessageBox from "./MessageBox/MessageBox";
import {Spring} from "react-spring/renderprops-universal";

class MainContainer extends React.Component {
    state = {
        response: '',
        successTick: false,
        successTickVisible: 'hiddenOpacity'
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

    toggleSuccessTick = () => {
        this.setState({successTick: !this.state.successTick})
    };

    setSuccessTickHidden = () => {
        this.setState({successTickVisible: 'hiddenOpacity'})
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.successTick !== this.state.successTick) {
            if (this.state.successTick) {
                this.setState({successTickVisible: 'visible'})
            } else {
                this.setState({successTickVisible: 'hiddenOpacity'})
            }
        }
    }

    render() {
        const successTickClass = 'successTick ' + this.state.successTickVisible;
        return (
            <main>
                <div className="mainContainer">
                    {!this.state.successTick ? (<div> </div>) : (
                        <Spring
                            from={{marginTop: -1000}}
                            to={{marginTop: 0}}
                        >
                            {props => (
                                <div  className={successTickClass} style={props}>
                                    &#10004;
                                </div>
                            )}
                        </Spring>
                    )}
                    <Logo/>
                    <SigninForm
                        updateResponse={this.updateResponse}
                        updateSignOutModalVisible={this.props.updateSignOutModalVisible}
                        getSignOutData={this.props.getSignOutData}
                        toggleSuccessTick={this.toggleSuccessTick}
                        setSuccessTickHidden={this.setSuccessTickHidden}
                    />
                    <div className="responseMessageFailed">
                        <MessageBox response={this.state.response}/>
                    </div>
                </div>
            </main>
        )
    }
}

export default MainContainer;