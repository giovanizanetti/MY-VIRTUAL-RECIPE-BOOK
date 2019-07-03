import React, { Component } from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form'
import { Redirect } from 'react-router-dom'
import  { renderIngredients } from '../RecipeCreate/containers/renderIngredients'
import { validate, renderErrors } from './containers/formErrors'
import { renderInput } from './containers/renderInput'
import AllergensFields from './AllergensFields'
import PrepTimeInputs from './PrepTimeInputs'

//This is a template form that can be imported by RecipeCreate and RecipeEdit
class RecipeForm extends Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues)
    return <Redirect to={`/myRecipes/`} />
  }

  render() {
    console.log(this.props)
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='container wrong col s12'>
        <Field
          name='title'
          component={renderInput}
          type='text'
          label='Enter Title'
        />
        <PrepTimeInputs />
        <FieldArray
          name="ingredients"
          type='text'
          component={renderIngredients}
        />
        <Field
          name='occasions'
          component={renderInput}
          type='text'
          label='Occasions'
        />
        <Field
          name='cuisines'
          component={renderInput}
          type='text'
          label='Enter cuisines'
        />
        <AllergensFields />
        <button
          className="btn pink lighten-1 z-depth-0"
          // disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'recipe Form',
  validate
})(RecipeForm)
