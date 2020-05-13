import React from "react";
import './tableSelector.css'

class TableSelector extends React.Component  {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle tableSelectorBtn" type="button" id="tableSelector"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
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