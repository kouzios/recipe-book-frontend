import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'

import './styles/common.css';

import Homepage from './views/Homepage';
import Login from './views/Login.jsx';
import NotFound from './views/NotFound.jsx';
import Header from './components/Header.jsx';
import Side from './components/Side';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCheckCircle, faTimesCircle, faBars, faCircle } from '@fortawesome/free-solid-svg-icons'

//Adds in fontawesome fonts to library to use
library.add(faCheckCircle, faTimesCircle, faBars, faCircle);

const authChecker = {
    isAuthenticated() {
        //TODO: check with server that key is valid
        return window.localStorage.getItem("auth") !== null;
    }
}

/**
 *  Verifies that the user is logged in, else redirects to login page
 *  Courtesy of: https://tylermcginnis.com/react-router-protected-routes-authentication/ 
 */
const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
    authChecker.isAuthenticated() === true
        ? 
        <div><Side/><Component {...props} /></div>
        : 
        <Redirect to='/login' />
    )} />
);

/**
 * Switches between different routes based on the url
 */
const routing = (
    <Router>
        <Header/>
        <Switch>
            <PrivateRoute exact path="/" component={Homepage} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(routing, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
