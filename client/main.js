import {Meteor} from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import {Tracker} from 'meteor/tracker';

import {routes, onAuthChange} from '../imports/routes/routes';
import {Links} from '../imports/api/links';

Tracker.autorun(() => {
    //Keep track of authentication status
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
    const links = Links.find({}).find().fetch();
    console.log('New links', links);

});

Meteor.startup(() => {
        ReactDOM.render(routes, document.getElementById('app'));
    }
);