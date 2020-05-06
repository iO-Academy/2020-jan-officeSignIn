import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";
import AdminModal from "./AdminModal/AdminModal";
import VisitorSignOutModal from "./VisitorSignOutModal/VisitorSignOutModal";

class LandingPage extends React.Component {
    state = {
        modalVisible: false,
        adminBtnVisible: true,
        signOutModalVisible: false,
        dataForSignOutModal: {}
    };

    updateModalVisible = () => {
        if(!this.state.modalVisible) {
            this.setState({modalVisible: true, adminBtnVisible: false})
        } else {
            this.setState({modalVisible: false, adminBtnVisible: true})
        }
    }

    updateSignOutModalVisible = () => {
        if(!this.state.signOutModalVisible) {
            this.setState({signOutModalVisible: true})
        } else {
            this.setState({signOutModalVisible: false})
        }
    }

    getSignOutData = (data) => {
       this.setState({dataForSignOutModal: data, signOutModalVisible: true})
        // console.log(this.state.dataForSignOutModal);
    }

    render() {
        return (
            <div>
                <h1>Mayden Academy Visitor sign-in</h1>
                <MainContainer
                    updateSignOutModalVisible={this.updateSignOutModalVisible}
                    getSignOutData={this.getSignOutData}
                />
                <AdminModal modalVisible={this.state.modalVisible} updateModalVisible={this.updateModalVisible}/>
                <VisitorSignOutModal signOutModalVisible={this.state.signOutModalVisible}
                                     updateSignOutModalVisible={this.updateSignOutModalVisible}
                                     dataForSignOutModal={this.state.dataForSignOutModal}
                />
                <AdminBtn adminBtnVisible={this.state.adminBtnVisible} updateModalVisible={this.updateModalVisible}/>
            </div>
        )
    }
}

export default LandingPage;