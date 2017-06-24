/**
 * Created by Daniel on 24/06/2017.
 */

import {Meteor} from 'meteor/meteor';
import React from 'react';
import createBrowserHistory from 'history/createBrowserHistory'
import {Router, Switch, Route, Redirect} from 'react-router-dom';

import Signup from './../ui/Signup';
import Link from './../ui/Link';
import NotFound from './../ui/NotFound'
import Login from './../ui/Login';

//Client-side routing using React-Router (react-router-dom v4)
const browserHistory = createBrowserHistory();
const unauthenticatedPages = ['/', '/signup'];
const authenticatedPage = ['/links'];

export const routes = (
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

export const onAuthChange = (isAuthenticated) => {
    const pathname = browserHistory.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPage.includes(pathname);

    if(isAuthenticated && isUnauthenticatedPage) {
        browserHistory.push('/links');
    } else if(!isAuthenticated && isAuthenticatedPage){
        browserHistory.push('/');
    }
};