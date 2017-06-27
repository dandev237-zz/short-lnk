/**
 * Created by Daniel on 25/06/2017.
 */
import React from 'react';
import PropTypes from 'proptypes';
import {Accounts} from 'meteor/accounts-base';

const PrivateHeader = (props) => {
    return(
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => Accounts.logout()}>Logout</button>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired
};

export default PrivateHeader;
