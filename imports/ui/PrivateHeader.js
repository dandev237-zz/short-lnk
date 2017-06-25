/**
 * Created by Daniel on 25/06/2017.
 */
import {Meteor} from 'meteor/meteor';
import React from 'react';
import PropTypes from 'proptypes';
import {Accounts} from 'meteor/accounts-base';

export default class PrivateHeader extends React.Component {
    title = '';

    constructor(props) {
        super(props);

        //Bind this since onLogout is not a lifecycle method
        this.onLogout = this.onLogout.bind(this);
        this.title = props.title;
    }

    onLogout() {
        Accounts.logout();
    }

    render() {
        return (
            <div>
                <h1>{this.title}</h1>
                <button onClick={this.onLogout}>Logout</button>
            </div>
        );
    }
}

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};
