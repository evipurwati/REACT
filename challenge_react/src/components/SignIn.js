import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import '../css/bootstrap.css';
import '../css/bootstrap.min.css';
import '../css/style.css';

class SignIn extends Component {
    state = { username: '', password: ''};
    changeInput = e => {
        this.setState({ [e.target.name]: e.target.value });
    };
    postLogin = () => {
        const { username, password } = this.state;
        const data = {
            username: username,
            password: password
        };
        const self = this;
        axios
            // .post("https://atareact.free.beeceptor.com/auth", data)
            .post("https://maealterra.free.beeceptor.com/login", data)
            .then(function(response) {
                console.log(response.data);
                if (response.data.hasOwnProperty('api_key')) {
                    localStorage.setItem('api_key', response.data.api_key);
                    localStorage.setItem('is_login', true);
                    localStorage.setItem('full_name', response.data.full_name);
                    localStorage.setItem('email', response.data.email);
                    self.props.history.push('/profile');
                }
            })
            .catch(function(error) {
                console.log(error);
            });
    };
    render () {
        console.log('state', this.state);
        return (
            <section className="content signin">
                <form onSubmit={e => e.preventDefault()}>
                <h4>SignIn</h4>
                <div>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={e => this.changeInput(e)}
                    />
                </div>
                <div>
                    <input
                    type='password'
                    name='password'
                    placeholder='password'
                    onChange={e => this.changeInput(e)}
                    />
                </div>
                <button onClick={() => this.postLogin()}>SignIn</button>
                <button type='reset'>Reset</button>
            </form>
            </section>
        )
    }
}

export default SignIn;