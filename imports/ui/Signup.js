/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //Component state
            error: ''
        };
    }

    onSubmit(e) {
        e.preventDefault(); //Prevent browser default action (full refresh)

        this.setState({
           error: 'Something went wrong.'
        });
    }

    render(){
        return (
            <div>
                <h1>Join Short Lnk</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" name="email" placeholder="e-mail"/>
                    <input type="password" name="password" placeholder="password"/>
                    <button>Create Account</button>
                </form>

                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}