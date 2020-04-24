import React from "react";
import './logOutBtn.css';

class LogOutBtn extends React.Component {
    // logout(){
    //     localStorage.clear();
    //     return(
    //         <Redirect to="/"/>
    //     )
    // }

    render() {
        return (
            <button className="logOutBtn">Log Out</button>
        )
    }
}

export default LogOutBtn;