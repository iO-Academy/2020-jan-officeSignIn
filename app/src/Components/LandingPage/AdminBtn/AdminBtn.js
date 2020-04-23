import React from "react";
import './AdminBtn.css';

class AdminBtn extends React.Component {
    render() {
        return (
            <button onClick={()=>this.props.updateModalVisible()}>Admin</button>
        )
    }
}

export default AdminBtn;