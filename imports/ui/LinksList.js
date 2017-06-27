/**
 * Created by Daniel on 25/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Tracker} from 'meteor/tracker';

import {Links} from '../api/links';
import LinksListItem from './LinksListItem';

export default class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }

    //Gets called right before the component is rendered
    componentDidMount() {
        console.log('Component did mount', LinksList);
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({}).fetch();
            this.setState({ links });
        });
    }

    //Gets called right before the component goes away
    componentWillUnmount() {
        console.log('Component will unmount', LinksList);
        this.linksTracker.stop();
    }

    renderLinksListItems() {
        return this.state.links.map((link) => {
            const shortUrl = Meteor.absoluteUrl(link._id);
            return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
        });
    }

    render() {
        return (
            <div>
                <p>Links List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}