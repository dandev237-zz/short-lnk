/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Meteor} from 'meteor/meteor';

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  //Component state
            error: ''
        };
    }

    onSubmit(e) {
        e.preventDefault(); //Prevent browser default action (full refresh)

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Meteor.loginWithPassword({email}, password, (err) => {
            if(err){
                this.setState({error: err.reason});
            }else{
                this.setState({error: ''});
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Short Lnk</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)} noValidate>
                    <input type="email" ref="email" name="email" placeholder="e-mail"/>
                    <input type="password" ref="password" name="password" placeholder="password"/>
                    <button>Login</button>
                </form>

                <Link to="/signup">Create an account</Link>
            </div>
        );
    }
}
