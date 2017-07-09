/**
 * Created by Daniel on 25/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import React from 'react';
import {Tracker} from 'meteor/tracker';
import {Session} from 'meteor/session';
import FlipMove from 'react-flip-move';

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
            const links = Links.find({
                visible: Session.get('showVisible')    //Session variable
            }).fetch();
            this.setState({ links });
        });
    }

    //Gets called right before the component goes away
    componentWillUnmount() {
        console.log('Component will unmount', LinksList);
        this.linksTracker.stop();
    }

    renderLinksListItems() {
        if(this.state.links.length === 0) {
            return(
                <div className="item">
                    <p className="item__status-message">No Links Found</p>
                </div>
            );
        } else {
            return this.state.links.map((link) => {
                const shortUrl = Meteor.absoluteUrl(link._id);
                return <LinksListItem key={link._id} shortUrl={shortUrl} {...link}/>;
            });
        }
    }

    render() {
        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {this.renderLinksListItems()}
                </FlipMove>
            </div>
        );
    }
}