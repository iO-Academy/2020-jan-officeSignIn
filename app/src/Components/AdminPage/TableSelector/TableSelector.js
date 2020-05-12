import React from "react";

class TableSelector extends React.Component  {
    render() {
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button"
                            onClick={this.props.viewSignedInVisitorTable}>Currently signed in
                    </button>
                    <button className="dropdown-item" type="button"
                            onClick={this.props.viewSignedOutVisitorTable}>View all signed out
                    </button>
                </div>
            </div>
        );
    }
}

export default TableSelector;