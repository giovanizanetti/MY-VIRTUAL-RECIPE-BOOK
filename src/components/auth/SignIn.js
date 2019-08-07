import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { signIn } from '../../actions/authActions'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

const SignIn = props => {
  const { handleSubmit, pristine, submitting, signIn, formValues, authError, auth, selectedRecipe} = props

  //When the user attempted to see full recipe when the user is logged out the user will be asked to sign in,
  //after sign in, the user can can access the recipe previously selected, if that is not the case the user
  //will be redirected to "myRecipes" page.
  if(auth.uid && selectedRecipe !== null) {
    return <Redirect to={`/recipes/${selectedRecipe.id || selectedRecipe.data.id}`} />
  } else if(auth.uid) {
    return <Redirect to={`/myRecipes/`} />
  }

  //extract the values from ReduxForm reducer formValues and pass it to sigIn action creator.
  return (
    <div className='container'>
      <form className='white' onSubmit={handleSubmit(() => signIn(formValues.signInForm.values))}>
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
          <div className="red-text center">
            { authError ? <p>{authError}</p> : null }
          </div>
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
  return {
    formValues: state.form,
    authError: state.auth.authError,
    auth: state.firebase.auth,
    selectedRecipe: state.selectedRecipe
  }
}

export default compose(connect(mapStateToProps, { signIn }), FORM)(SignIn)
