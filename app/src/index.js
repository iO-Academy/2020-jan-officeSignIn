import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import LandingPage from "./Components/LandingPage/LandingPage";
import AdminPage from "./Components/AdminPage/AdminPage";
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

class Routing extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={ LandingPage }/>
                        <Route path="/AdminPage" component={ AdminPage }/>
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

const getBaseUrl = () => {
  let isProd = false;
  if(isProd) {
    return '{productionApp}'
  } else {
    return 'http://localhost:8080/'
  }
};

export default getBaseUrl();