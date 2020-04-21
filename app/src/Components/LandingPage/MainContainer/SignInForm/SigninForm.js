import React from "react";
import './SigninForm.css';

class SigninForm extends React.Component {
    render() {
        return (
            <form id="visitorSignInForm" action="POST">
                <input id="name" type="text" placeholder="Your first name and surname..."/>
                <input id="organisation" type="text" placeholder="Your organisation..."/>
                <input className="signInButton" type="submit" value="Sign In"/>
            </form>
        )
    }

    postSignInData() {
        let signInButton = document.querySelector('.signInButton');
        signInButton.addEventListener('submit', (e)=>{
            e.preventDefault();
        });
        let name = document.getElementById('name').value;
        let organisation = document.getElementById('organisation').value;
        const visitorDataToSend = {
            method: 'POST', 
            headers: { 'Content-Type': 'application/json' }, 
            body: JSON.stringify({ name: name, organisation: organisation })
        }
    }
}

export default SigninForm;