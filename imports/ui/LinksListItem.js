/**
 * Created by Daniel on 27/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'proptypes';
import Clipboard from 'clipboard';
import moment from 'moment';

export default class LinksListItem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            justCopied: false
        };
    }

    componentDidMount(){
        this.clipboard = new Clipboard(this.refs.copyButton);

        this.clipboard.on('success', () => {
            this.setState({justCopied: true});
            setTimeout(() => {
                this.setState({justCopied: false});
            }, 1000);
        }).on('error', () => {
            //TODO Give error feedback
        });
    }

    componentWillUnmount(){
        this.clipboard.destroy();
    }

    renderStats() {
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;

        if(typeof this.props.lastVisitedAt === 'number') {
            visitedMessage = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`;
        }

        return <p>{this.props.visitedCount} {visitMessage} {visitedMessage}</p>;
    }

    render() {
        return(
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <p>{this.props.visible.toString()}</p>
                {this.renderStats()}
                <a className="button button--pill button--link" href={this.props.shortUrl} target="_blank">Visit</a>
                <button className="button button--pill" ref="copyButton" data-clipboard-text={this.props.shortUrl}>
                    {this.state.justCopied ? 'Copied' : 'Copy'}
                </button>
                <button className="button button--pill" onClick={() => {
                    Meteor.call('links.setVisibility', this.props._id, !this.props.visible);
                }}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number
};