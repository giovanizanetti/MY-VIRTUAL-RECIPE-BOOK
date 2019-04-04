import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignIn extends Component {
  
  render() { 
    return (
      <div className='container'>
        <form className='white' onSubmit={this.handleSubmit}>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <label htmlFor='email'>enter your e-mail</label>
            <Field 
              name="email"
              component="input"
              type="email"
              placeholder="enter your email address"
              id="email"
            />
          </div>
          <div className='input-field'>
            <label htmlFor='password'>Enter your password</label>
            <input type='password' id='password' onChange={this.handleChange} />
            <Field 
              name="password"
              component="input"
              type="password"
              placeholder="enter your password"
              id="password"
            />
          </div>
          <div className='input-field'>
            <button className="btn pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    )
  }
}

const validate = formValues => {
  const errors = {}

  if(!formValues.email) {
    errors.title = 'please enter a valid e-mail address'
  }

  if(!formValues.description) {
    errors.password = 'Please enter the correct password'
  }
  
  return errors
}
 
export default reduxForm({
  form: 'signInForm',
  validate
}) (SignIn)