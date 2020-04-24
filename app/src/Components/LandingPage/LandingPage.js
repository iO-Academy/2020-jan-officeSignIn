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
            logAdminIn: this.props.logAnAdminIn,
            loggedIn: this.props.loggedIn,
        };
        console.log('LandingPageConstructor ' + this.state)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bearerToken !== this.props.bearerToken || prevProps.loggedIn !== this.props.loggedIn) {
            this.setState({bearerToken: this.props.bearerToken, loggedIn: this.props.loggedIn})
        }
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
                    loggedIn={this.state.loggedIn}
                    logAdminIn={this.logAdminIn}
                />
                <AdminBtn adminBtnVisible={this.state.adminBtnVisible} updateModalVisible={this.updateModalVisible}/>
            </div>
        )
    }
}

export default LandingPage;