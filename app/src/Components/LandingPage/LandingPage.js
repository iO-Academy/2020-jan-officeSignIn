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
        adminBtnActive: false,
        signAllOutBtnActive: false,
        successTickActive: false
    };

    toggleAdminBtnState = () => {
        this.setState({adminBtnActive: !this.state.adminBtnActive})
    }

    toggleSignAllOutBtnState = () => {
        this.setState({signAllOutBtnActive: !this.state.signAllOutBtnActive})
    }

    toggleSuccessTickState = () => {
        this.setState({successTickActive: !this.state.successTickActive})
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
                    signAllOutSuccessTickState={this.state.successTickActive}
                    toggleLandingPageSuccessTickState={this.toggleSuccessTickState}
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
                    signAllOutBtnActiveState={this.state.signAllOutBtnActive}
                    toggleSignAllOutBtnState={this.toggleSignAllOutBtnState}
                    signAllOutSuccessTickState={this.state.successTickActive}
                    toggleLandingPageSuccessTickState={this.toggleSuccessTickState}
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
                    signAllOutBtnActiveState={this.state.signAllOutBtnActive}
                    toggleSignAllOutBtnState={this.toggleSignAllOutBtnState}
                />
            </div>
        )
    }
}

export default LandingPage;