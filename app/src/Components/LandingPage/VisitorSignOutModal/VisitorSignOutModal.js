import React from "react";

class VisitorSignOutModal extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            modalClass: 'hidden',
            response: ''
        };
    }

    render() {
        let visibleState = 'adminModal ' + this.state.modalClass;
        return (
            <div className={visibleState}>
                <span className="instructions">When did you sign in?</span>

                <button className="closeModalBtn" onClick={this.props.updateModalVisible}>X</button>
                <div className="responseMessage">{this.state.response}</div>
            </div>
        )
    }

}

export default VisitorSignOutModal;
