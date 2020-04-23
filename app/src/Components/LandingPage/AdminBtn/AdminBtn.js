import React from "react";
import './AdminBtn.css';

class AdminBtn extends React.Component {
    componentDidUpdate(prevProps) {
        if (prevProps.modalVisible != this.props.modalVisible) {
           this.setState()
        }
    }

    render() {
        return (
            <button onClick={this.props.updateModalVisible}>Admin</button>
        )
    }
}

export default AdminBtn;