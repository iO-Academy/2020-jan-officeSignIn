import React from 'react';
import './MessageBox.css';

class MessageBox extends React.Component {
    render() {
        return (
                <div className="messageBox">{ this.props.response }</div>
        );
    }
}

export default MessageBox;