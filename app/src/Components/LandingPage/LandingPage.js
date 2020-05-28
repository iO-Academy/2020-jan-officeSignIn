import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";
import AdminModal from "./AdminModal/AdminModal";
import VisitorSignOutModal from "./VisitorSignOutModal/VisitorSignOutModal";
import BackgroundOverlay from "../BackgroundOverlay/BackgroundOverlay";
import SignAllOutBtn from "./SignAllOutBtn/SignAllOutBtn";

class LandingPage extends React.Component {
    state = {
        modalVisible: false,
        adminBtnVisible: true,
        signOutModalVisible: false,
        dataForSignOutModal: {},
        adminBtnActive: false
    };

    toggleAdminBtnState = () => {
        this.setState({adminBtnActive: !this.state.adminBtnActive})
    }

    updateModalVisible = () => {
        if(!this.state.modalVisible) {
            this.setState({modalVisible: true, adminBtnVisible: false})
        } else {
            this.setState({modalVisible: false, adminBtnVisible: true})
        }
    };

    updateSignOutModalVisible = () => {
        if(!this.state.signOutModalVisible) {
            this.setState({signOutModalVisible: true})
        } else {
            this.setState({signOutModalVisible: false})
        }
    };

    getSignOutData = (data) => {
       this.setState({dataForSignOutModal: data, signOutModalVisible: true})
    };

    render() {
        return (
            <div className="landingPage">
                <div className="landingPageBackgroundColor"> </div>
                <h1>Mayden Academy Visitor Sign In</h1>
                <MainContainer
                    updateSignOutModalVisible={this.updateSignOutModalVisible}
                    getSignOutData={this.getSignOutData}
                />
                <BackgroundOverlay
                    modalVisible={this.state.modalVisible}
                    signOutModalVisible={this.state.signOutModalVisible}
                />
                <AdminModal
                    modalVisible={this.state.modalVisible}
                    updateModalVisible={this.updateModalVisible}
                    adminBtnActiveState={this.state.adminBtnActive}
                    toggleAdminBtnState={this.toggleAdminBtnState}
                />
                <VisitorSignOutModal
                    signOutModalVisible={this.state.signOutModalVisible}
                    updateSignOutModalVisible={this.updateSignOutModalVisible}
                    dataForSignOutModal={this.state.dataForSignOutModal}
                />
                <AdminBtn
                    adminBtnVisible={this.state.adminBtnVisible}
                    updateModalVisible={this.updateModalVisible}
                    signOutModalVisible={this.state.signOutModalVisible}
                    updateSignOutModalVisible={this.updateSignOutModalVisible}
                    adminBtnActiveState={this.state.adminBtnActive}
                    toggleAdminBtnState={this.toggleAdminBtnState}
                />
                <SignAllOutBtn
                    adminBtnVisible={this.state.adminBtnVisible}
                    updateModalVisible={this.updateModalVisible}
                />
            </div>
        )
    }
}

export default LandingPage;