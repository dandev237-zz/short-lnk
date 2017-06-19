import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound'
import Login from './../imports/ui/Login';

//Client-side routing using React-Router (react-router-dom v4)
const browserHistory = createBrowserHistory();


const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/links" component={Link}/>
            <Route component={NotFound}/>
        </Switch>
    </Router>
);

Meteor.startup(() => {
        ReactDOM.render(routes, document.getElementById('app'));
    }
);