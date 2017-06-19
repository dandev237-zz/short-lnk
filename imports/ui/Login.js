/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default class Login extends React.Component {
    render() {
        return (
            <div>
                <h1>Login to Short Lnk</h1>

                Login form here

                <Link to="/signup">Create an account</Link>
            </div>
        );
    }
}
