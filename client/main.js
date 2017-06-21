import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory'
import {Router, Switch, Route, Redirect} from 'react-router-dom';
import {Tracker} from 'meteor/tracker';

import Signup from './../imports/ui/Signup';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound'
import Login from './../imports/ui/Login';

//Client-side routing using React-Router (react-router-dom v4)
const browserHistory = createBrowserHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPage = ['/links'];

const routes = (
    <Router history={browserHistory}>
        <Switch>
            <Route exact path="/" render={() => {
                return Meteor.userId() ? <Redirect to="/links" /> : <Login />
            }} />
            <Route path="/signup" render={() => {
                return Meteor.userId() ? <Redirect to="/links" /> : <Signup />
            }} />
            <Route path="/links" render={() => {
                return Meteor.userId() ? <Link to="/links" /> : <Redirect to="/"/>
            }} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);

Tracker.autorun(() => {
    //Keep track of authentication status
    const isAuthenticated = !!Meteor.userId();
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPage.includes(pathname);

    if(isAuthenticated && isUnauthenticatedPage) {
        browserHistory.push('/links');
    } else if(!isAuthenticated && isAuthenticatedPage){
        browserHistory.push('/');
    }
});

Meteor.startup(() => {
        ReactDOM.render(routes, document.getElementById('app'));
    }
);