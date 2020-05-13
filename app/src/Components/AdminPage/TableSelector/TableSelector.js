import React from "react";
import './tableSelector.css'

class TableSelector extends React.Component  {
    state = {
        currentlySelectedTable: 'View currently signed in visitors'
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.signedInTableVisible !== this.props.signedInTableVisible ||
        prevProps.signedOutTableVisible !== this.props.signedOutTableVisible) {
            if (this.props.signedInTableVisible) {
                this.setState({currentlySelectedTable: 'View currently signed in visitors'})
            } else if (this.props.signedOutTableVisible) {
                this.setState({currentlySelectedTable: 'View all signed out visitors'})
            }
        }
    }

    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle tableSelectorBtn" type="button" id="tableSelector"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    {this.state.currentlySelectedTable}
                </button>
                <div className="dropdown-menu" aria-labelledby="tableSelector">
                    <button className="dropdown-item" type="button"
                            onClick={this.props.viewSignedInVisitorTable}>View currently signed in visitors
                    </button>
                    <button className="dropdown-item" type="button"
                            onClick={this.props.viewSignedOutVisitorTable}>View all signed out visitors
                    </button>
                </div>
            </div>
        );
    }
}

export default TableSelector;