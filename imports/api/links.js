/**
 * Created by Daniel on 24/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

//Create a publication
if(Meteor.isServer) {
    Meteor.publish('links', function() {    //We need access to the 'this' binding (ES5 Anonymous function)
        if(this.userId) {
            return Links.find({userId: this.userId});
        }
    });
}
