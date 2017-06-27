/**
 * Created by Daniel on 27/06/2017.
 */
import React from 'react';
import PropTypes from 'proptypes';

export default class LinksListItem extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
            </div>
        );
    }
}

LinksListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired
};