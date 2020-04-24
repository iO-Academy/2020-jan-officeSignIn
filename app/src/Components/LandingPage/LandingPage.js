import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";
import AdminModal from "./AdminModal/AdminModal";

class LandingPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            adminBtnVisible: true,
            bearerToken: this.props.bearerToken,
            setBearerToken: this.props.setBearerToken,
            loggedIn: this.props.loggedIn,
            setLoggedIn: this.props.setLoggedIn
        };
    }

    updateModalVisible = () => {
        if(!this.state.modalVisible) {
            this.setState({modalVisible: true, adminBtnVisible: false})
        } else {
            this.setState({modalVisible: false, adminBtnVisible: true})
        }
    }

    render() {
        return (
            <div>
                <h1>Mayden Academy Visitor sign-in</h1>
                <MainContainer/>
                <AdminModal
                    modalVisible={this.state.modalVisible}
                    updateModalVisible={this.updateModalVisible}
                    bearerToken={this.state.bearerToken}
                    setBearerToken={this.state.setBearerToken}
                    loggedIn={this.state.loggedIn}
                    setLoggedIn={this.state.setLoggedIn}
                />
                <AdminBtn adminBtnVisible={this.state.adminBtnVisible} updateModalVisible={this.updateModalVisible}/>
            </div>
        )
    }
}

export default LandingPage;