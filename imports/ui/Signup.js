/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component {
    render(){
        return (
            <div>
                <h1>Join Short Lnk</h1>

                Signup form here

                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}