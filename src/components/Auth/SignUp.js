import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../actions/authActions'

const SignUp = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    formValues,
    authError,
    signUp,
    auth,
  } = props

  if (auth.uid) {
    return <Redirect to='/recipes' />
  }

  return (
    <div className='container'>
      <form
        className='white'
        onSubmit={handleSubmit(() => signUp(formValues.signUpForm.values))}
      >
        <h5 className='grey-text text-darken-3'>Sign Up</h5>
        <div className='input-field'>
          <Field
            autoFocus
            name='email'
            component='input'
            type='email'
            placeholder='enter your email address'
          />
        </div>
        <div className='input-field'>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='enter your password'
          />
        </div>
        <div className='input-field'>
          <Field
            name='firstName'
            component='input'
            type='text'
            placeholder='enter your first name'
          />
        </div>
        <div className='input-field'>
          <Field
            name='lastName'
            component='input'
            type='text'
            placeholder='enter your last name'
          />
        </div>
        <div className='input-field'>
          <button
            className='btn pink lighten-1 z-depth-0'
            disabled={pristine || submitting}
          >
            Login
          </button>
          <div className='red-text center'>
            {authError ? <p>{authError}</p> : null}
          </div>
        </div>
      </form>
    </div>
  )
}

const validate = (formValues) => {
  const errors = {}

  if (!formValues.email) {
    errors.title = 'please enter a valid e-mail address'
  }
  if (!formValues.password) {
    errors.password = 'Please enter the correct password'
  }
  if (!formValues.firstName) {
    errors.firstName = 'Please enter your first name'
  }
  if (!formValues.lastName) {
    errors.lastName = 'Please enter your last name'
  }

  return errors
}

const FORM = reduxForm({
  form: 'signUpForm',
  validate,
})

const mapStateToProps = (state) => {
  return {
    formValues: state.form,
    auth: state.firebase.auth,
    authError: state.auth.authError,
  }
}

export default compose(connect(mapStateToProps, { signUp }), FORM)(SignUp)
