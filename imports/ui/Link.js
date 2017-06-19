/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';

export default class Link extends React.Component{
    constructor(props) {
        super(props);

        //Bind this since onLogout is not a lifecycle method
        this.onLogout = this.onLogout.bind(this);
    }

    //Redirects the user to the login page
    onLogout() {
        return this.props.history.push('/');
    }


    //We do the routing using the onLogout method
    render() {
        return (
          <div>
              <h1>Your Links</h1>
              <button onClick={this.onLogout}>Logout</button>
          </div>
        );
    }
}