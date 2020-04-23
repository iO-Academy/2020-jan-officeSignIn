import React from 'react';
import './LandingPage.css';
import MainContainer from "./MainContainer/MainContainer";
import AdminBtn from "./AdminBtn/AdminBtn";
import AdminModal from "./AdminModal/AdminModal";

class LandingPage extends React.Component {
    state = {
        modalVisible: false
    };

    updateModalVisible = () => {
        if(!this.state.modalVisible) {
            this.setState({modalVisible: true})
        } else {
            this.setState({modalVisible: false})
        }
        console.log(this.state.modalVisible)
    }

    render() {
        return (
            <div>
                <h1>Mayden Academy Visitor sign-in</h1>
                <MainContainer/>
                <AdminModal modalVisible={this.state.modalVisible} updateModalVisible={this.updateModalVisible}/>
                <AdminBtn modalVisible={this.state.modalVisible} updateModalVisible={this.updateModalVisible}/>
            </div>
        )
    }
}

export default LandingPage;