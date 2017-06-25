import { Meteor } from 'meteor/meteor';
import { WebApp } from 'meteor/webapp';

import '../imports/api/users';  //This will execute the code inside users.js
import { Links } from '../imports/api/links';

//Middleware redirection
Meteor.startup(() => {
    WebApp.connectHandlers.use((req, res, next) => {
        const _id = req.url.slice(1);
        const link = Links.findOne({_id});   //ids are unique

        if(link) {
            res.statusCode = 302;
            res.setHeader('Location', link.url);
            res.end();
        } else {
            next();
        }
    });
});
