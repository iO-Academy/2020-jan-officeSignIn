import React from "react";

class TableSelector extends React.Component  {
    // in admin container, have in props, currentlySelected and a method to toggle it (updateSelected)

    // have the two buttons below, onClick toggle updateSelected method in adminContainer

    // use className to toggle visible and hidden? Or display none and block in order to not have transition?


    render() {
        //line 10, have it toggle depending on what is actively selected {this.state.currentlySelected}
        return (
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <button className="dropdown-item" type="button">Currently signed in</button>
                    <button className="dropdown-item" type="button">View all signed out</button>
                </div>
            </div>
        );
    }
}

export default TableSelector;