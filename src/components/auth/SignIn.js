import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

class SignIn extends Component {

  mySubmit = formValues => {
    this.props.mySubmit(formValues)
  }

  render() { 
  console.log(this.props)

    return (
      <div className='container'>
        <form className='white' onSubmit={this.props.handleSubmit(this.mySubmit)}>
        <h5 className='grey-text text-darken-3'>Sign In</h5>
          <div className='input-field'>
            <Field 
              name="email"
              component="input"
              type="email"
              placeholder="enter your email address"
            />
          </div>
          <div className='input-field'>
            <Field 
              name="password"
              component="input"
              type="password"
              placeholder="enter your password"
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

  if(!formValues.password) {
    errors.password = 'Please enter the correct password'
  }
  
  return errors
}
 
export default reduxForm({
  form: 'signInForm',
  validate
}) (SignIn)