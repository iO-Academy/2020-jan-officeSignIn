import React from "react";

class VisitorSignOutModal extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            modalClass: this.props.signOutModalVisible ? 'visible' : 'hidden',
            response: ''
        };
    }

    componentDidUpdate(prevProps) {
        if (prevProps.signOutModalVisible !== this.props.signOutModalVisible) {
            this.determineVisibleState()
        }
    }

    determineVisibleState () {
        if(this.props.signOutModalVisible) {
            this.setState({modalClass: 'visible'})
        } else {
            this.setState({modalClass: 'hidden'})
        }
    }

    render() {
        let visibleState = 'signOutModal ' + this.state.modalClass;
        console.log(visibleState)
        return (
            <div className={visibleState}>
                <span className="instructions">When did you sign in?</span>

                <button className="closeModalBtn" onClick={this.props.updateSignOutModalVisible}>X</button>
                <div className="responseMessage">{this.state.response}</div>
            </div>
        )
    }

}

export default VisitorSignOutModal;
