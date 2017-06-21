/**
 * Created by Daniel on 18/06/2017.
 */
import React from 'react';
import {Link} from 'react-router-dom';
import {Accounts} from 'meteor/accounts-base';

export default class Signup extends React.Component {
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

        Accounts.createUser({email, password}, (err) => {
            if(err){
                this.setState({error: err.reason});
            }else{
                this.setState({error: ''});
            }
        });
    }

    render(){
        return (
            <div>
                <h1>Join Short Lnk</h1>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="e-mail"/>
                    <input type="password" ref="password" name="password" placeholder="password"/>
                    <button>Create Account</button>
                </form>

                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}