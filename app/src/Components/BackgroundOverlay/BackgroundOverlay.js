import React from "react";
import './backgroundOverlay.css'

class BackgroundOverlay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modalVisible: false,
            modalClass: 'hidden'
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.modalVisible !== this.props.modalVisible ||
            prevProps.signOutModalVisible !== this.props.signOutModalVisible) {

            if (this.props.modalVisible || this.props.signOutModalVisible) {
                this.setState({modalClass: 'visible'})
            } else {
                this.setState({modalClass: 'hidden'})
            }
        }
    }

    render() {
        let visibleState = 'backgroundOverlay ' + this.state.modalClass;
        return (
            <div className={visibleState}></div>
        );
    }
}

export default BackgroundOverlay;