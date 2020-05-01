import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";
import AdminModal from "./AdminModal/AdminModal";
import VisitorSignOutModal from "./VisitorSignOutModal/VisitorSignOutModal";

const fakeDataForTest = {
    Data: [
        {
            "id": "7",
            "Name": "Fishlegs",
            "Company": "Hairy Hooligans",
            "DateOfVisit": "2020-05-01",
            "TimeOfSignIn": "14:22:15"
        },
        {
            "id": "8",
            "Name": "Hiccup",
            "Company": "Hairy Hooligans",
            "DateOfVisit": "2020-05-01",
            "TimeOfSignIn": "14:22:20"
        }
    ]
}

class LandingPage extends React.Component {
    state = {
        modalVisible: false,
        adminBtnVisible: true,
        signOutModalVisible: true
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

    render() {
        return (
            <div>
                <h1>Mayden Academy Visitor sign-in</h1>
                <MainContainer/>
                <AdminModal modalVisible={this.state.modalVisible} updateModalVisible={this.updateModalVisible}/>
                <VisitorSignOutModal signOutModalVisible={this.state.signOutModalVisible}
                                     updateSignOutModalVisible={this.updateSignOutModalVisible}
                                     dataForSignOutModal={fakeDataForTest}
                />
                <AdminBtn adminBtnVisible={this.state.adminBtnVisible} updateModalVisible={this.updateModalVisible}/>
            </div>
        )
    }
}

export default LandingPage;