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
            throw new Meteor.error('not-authorized');
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
            userId: this.userId,
            visible: true
        });
    },

    'links.setVisibility'(_id, visible) {
        if(!this.userId) {
            throw new Meteor.error('not-authorized');
        }

        try {
            new SimpleSchema({
                _id: {
                    type: String,
                    min: 1
                },
                visible: {
                    type: Boolean
                }
            }).validate({_id, visible});
        } catch (e) {
            throw new Meteor.Error(400, e.message);
        }

        Links.update({_id, userId: this.userId}, {$set: {visible}});
    }
});