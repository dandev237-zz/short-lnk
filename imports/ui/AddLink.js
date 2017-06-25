/**
 * Created by Daniel on 25/06/2017.
 */
import React from 'react';

export default class AddLink extends React.Component {
    onSubmit(e) {
        const url = this.refs.url.value.trim();

        e.preventDefault();

        if(url) {
            Meteor.call('links.insert', url);
            this.refs.url.value = '';
        }
    }

    render(){
        return(
            <div>
                <p>Add Link</p>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="text" ref="url" placeholder="URL"/>
                    <button>Add Link</button>
                </form>
            </div>
        );
    }
}
