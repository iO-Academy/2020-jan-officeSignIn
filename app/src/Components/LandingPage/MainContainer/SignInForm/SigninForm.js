import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    render() {
        return (
            <form action="POST">
                <input type="text" placeholder="Your first name..."/>
                <input type="text" placeholder="Your surname..."/>
                <input type="text" placeholder="Your organisation..."/>
                <input type="submit" value="Sign In"/>
            </form>
        )
    }
}

export default SigninForm;