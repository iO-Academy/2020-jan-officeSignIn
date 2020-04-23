import React from "react";
import './AdminBtn.css';

class AdminBtn extends React.Component {
    state = {
        adminBtnClass: 'visible'
    };

    componentDidUpdate(prevProps) {
        if (prevProps.adminBtnVisible != this.props.adminBtnVisible) {
            if(this.props.adminBtnVisible) {
                this.setState({adminBtnClass: 'visible'})
            } else {
                this.setState({adminBtnClass: 'hidden'})
            }
        }
    }

    render() {
        let adminBtnVisibility = 'adminBtn ' + this.state.adminBtnClass
        return (
            <button className={adminBtnVisibility} onClick={()=>this.props.updateModalVisible()}>Admin</button>
        )
    }
}

export default AdminBtn;