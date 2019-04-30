import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { compose } from 'redux'

const SignIn = props => {
  const { handleSubmit, pristine, submitting, onSubmit, signIn } = props
  console.log(props)
  return (
    <div className='container'>
      <form className='white' onSubmit={handleSubmit(() => onSubmit)}>
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
          <button 
            className="btn pink lighten-1 z-depth-0"
            disabled={pristine || submitting} 
          >
            Login
          </button>
        </div>
      </form>
    </div>
  )
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
 
const FORM =  reduxForm({
  form: 'signInForm',
  validate
})

const mapStateToProps = state => {
  console.log(state,'pppppp')
  return {
    formValues: state.form
  }
}

export default compose(connect(mapStateToProps, { signIn }), FORM)(SignIn)