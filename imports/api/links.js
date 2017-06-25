/**
 * Created by Daniel on 24/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import shortId from 'shortid';

export const Links = new Mongo.Collection('links');

//Create a publication
if(Meteor.isServer) {
    Meteor.publish('links', function() {    //We need access to the 'this' binding (ES5 Anonymous function)
        if(this.userId) {
            return Links.find({userId: this.userId});
        }
    });
}

Meteor.methods({
    'links.insert'(url) {
        //User validation
        if(!this.userId) {
            throw new Meteor.error('not-authorised');
        }

        //URL validation
        try {
            new SimpleSchema({
                url: {
                    type: String,
                    label: 'Your link',
                    regEx: SimpleSchema.RegEx.Url
                }
            }).validate({url});
        } catch (e) {
            throw new Meteor.Error(400, e.message);
        }

        Links.insert({
            _id: shortId.generate(),
            url,
            userId: this.userId
        });
    }
});