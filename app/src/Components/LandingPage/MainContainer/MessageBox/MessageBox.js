import React from 'react';
import './MessageBox.css';

const MessageBox = ({response}) => {
    return <div className="messageBox">{response}</div>;
};

export default MessageBox;