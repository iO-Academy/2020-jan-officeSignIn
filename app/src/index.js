import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class Routing extends React.Component {
    state= {
        bearerToken: '',
        loggedIn: false
    }

    setBearerToken = (bearerToken) =>
    {
        this.setState({bearerToken: bearerToken})
    }

    setLoggedIn = (loggedInState) =>
    {
        this.setState({loggedIn: loggedInState})
    }

    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" render={() =>
                            <LandingPage
                                loggedIn={this.state.loggedIn}
                                bearerToken={this.state.bearerToken}
                                setBearerToken={this.setBearerToken}
                                setLoggedIn={this.setLoggedIn}
                            />}
                        />
                        <Route path="/adminPage" render={() =>
                            <AdminPage
                                loggedIn={this.state.loggedIn}
                                bearerToken={this.state.bearerToken}
                                setBearerToken={this.setBearerToken}
                                setLoggedIn={this.setLoggedIn}
                            />}
                        />
                        <Route render={() =>
                            <LandingPage
                                loggedIn={this.state.loggedIn}
                                bearerToken={this.state.bearerToken}
                                setBearerToken={this.setBearerToken}
                                setLoggedIn={this.setLoggedIn}
                            />}
                        />
                    </Switch>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
  document.getElementById('root')
);

const getBaseUrl = () => {
  let isProd = false;
  if(isProd) {
    return '{productionApp}'
  } else {
    return 'http://localhost:8080/'
  }
};

export const getBaseUrlApp = () => {
    let isProd = false;
    if(isProd) {
        return '{productionApp}'
    } else {
        return 'http://localhost:3000/'
    }
};

export default getBaseUrl()
