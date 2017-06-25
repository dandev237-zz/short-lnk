/**
 * Created by Daniel on 24/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';

export const Links = new Mongo.Collection('links');

//Create a publication
if(Meteor.isServer) {
    Meteor.publish('links', () => {
        return Links.find();
    });
}
