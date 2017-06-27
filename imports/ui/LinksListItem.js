/**
 * Created by Daniel on 27/06/2017.
 */
import React from 'react';
import PropTypes from 'proptypes';
import Clipboard from 'clipboard';

export default class LinksListItem extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.clipboard = new Clipboard(this.refs.copyButton);

        this.clipboard.on('success', () => {
            //TODO Give success feedback
        }).on('error', () => {
            //TODO Give error feedback
        });
    }

    componentWillMount(){
        this.clipboard.destroy();
    }

    render() {
        return(
            <div>
                <p>{this.props.url}</p>
                <p>{this.props.shortUrl}</p>
                <button ref="copyButton" data-clipboard-text={this.props.shortUrl}>Copy</button>
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