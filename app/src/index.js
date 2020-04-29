import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

class Routing extends React.Component {
    constructor(props) {
        super(props);

        localStorage.setItem('apiUrl', this.getBaseUrlApi());
        localStorage.setItem('appUrl', this.getBaseUrlApp());
    }

    getBaseUrlApi() {
        let isProd = false;
        if (isProd) {
            return '{productionApi}'
        } else {
            return 'http://localhost:8080/'
        }
    }

    getBaseUrlApp() {
        let isProd = false;
        if(isProd) {
            return '{productionApp}'
        } else {
            return 'http://localhost:3000/'
        }
    }


    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={ LandingPage }/>
                        <Route onLeave= { () => localStorage.removeItem('bearerToken') } path="/adminPage" component={ AdminPage }/>
                        <Route component={ LandingPage }/>
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
