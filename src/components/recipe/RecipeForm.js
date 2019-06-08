import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

//This is a template form that can be imported by RecipeCreate and RecipeEdit

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if(touched && error) {
      return (
        <div data-error="wrong">
          <div className='header'>{error}</div>
        </div>
      )
    }
  }

  renderInput = ({ input, label, meta }) => {
    const className = `input-field ${meta.error && meta.touched ? 'wrong' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  renderTextarea = ({ input, label, meta }) => {
    const className = `input-field ${meta.error && meta.touched ? 'wrong' : ''}`
    return (
      <div className={className}>
        <label>{label}</label>
        <textarea {...input} autoComplete='off'/>
        {this.renderError(meta)}
      </div>
    )
  }

  onSubmit = formValues => {
    this.props.onSubmit(formValues)
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className='container wrong'>
        <Field
          name='title'
          component={this.renderInput}
          type='text'
          label='Enter Title'
        />
        <Field
          name='preparation time'
          component={this.renderInput}
          type='text'
          label='Enter the preparation time of your recipe'
        />
        <Field
          name='ingredients'
          component={this.renderTextarea}
          type='text'
          label='Enter the ingredients items with the respective amount'
        />
        <Field
          name='instructions'
          component={this.renderTextarea}
          type='text'
          label='Enter detailed instructions for preparation'
        />
        <button
          className="btn pink lighten-1 z-depth-0"
          disabled={this.props.pristine || this.props.submitting}
        >
          Submit
        </button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {}

  if(!formValues.title) {
    errors.title = 'You must enter a title'
  }

  if(!formValues.description) {
    errors.description = 'You must enter a description'
  }

  return errors
}

export default reduxForm({
  form: 'streamForm',
  validate
})(StreamForm)
