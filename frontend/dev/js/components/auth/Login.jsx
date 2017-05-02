/*
    ./client/components/Login.jsx
*/
import React from 'react';

require('./auth.styl')

export default class Login extends React.Component {

  constructor () {
    super();
    this.state = {
      showSignup: false,
      email: '',
      password: ''
    }
  }

  toggleSignup (e) {
    e.preventDefault();
    this.setState({
      showSignup: !this.state.showSignup
    })
  }

  signIn (e) {
    e.preventDefault();
    console.log('signIn')
  }

  signUp (e) {
    e.preventDefault();
    console.log(this.state)
  }

  emailChange (e) {
    this.setState({email: e.target.value})
  }

  passwordChange (e) {
    this.setState({password: e.target.value})
  }

  render() {
    return (
      <div class="p-50">

        <form name="signinform" class={this.state.showSignup ? 'login-form form-hide' : 'login-form form-show'} noValidate>
          <h2>Sign in</h2>

          <input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.emailChange.bind(this)} required />
          <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange.bind(this)} required />
          <button type="submit" class="btn btn-success" onClick={this.signIn.bind(this)}>Sign in</button>

        </form>

        <div class="post-new">

          <div class="post-toggle" onClick={this.toggleSignup.bind(this)} class={this.state.showSignup ? 'signup-form form-hide' : 'signup-form form-show'}>
            <button class="btn">Don't have an account?</button>
          </div>

          <form name="signupform" class={this.state.showSignup ? 'signup-form form-show' : 'signup-form form-hide'} noValidate>
            
            <h2>Sign up</h2>

            <input name="email" type="text" placeholder="Email" value={this.state.email} onChange={this.emailChange.bind(this)} required />
            <input name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.passwordChange.bind(this)} required />
            <button type="submit" class="btn btn-success" onClick={this.signUp.bind(this)}>Create Account</button>
            
            <button class="btn btn-cancel" onClick={this.toggleSignup.bind(this)}>Cancel</button>
          </form>

        </div>
      </div>);
  }
}