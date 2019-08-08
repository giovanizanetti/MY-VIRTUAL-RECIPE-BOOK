import React from 'react'
import { Field, reduxForm } from 'redux-form'
import RenderInput from './recipe/RecipeForm/containers/RenderInput'

const SearchBar = (props) => {
  const onSubmit = formValues => {
    props.onSubmit(formValues)
  }

  return (
    <>
      <form onSubmit={ props.handleSubmit(onSubmit) }>
        <div className="input-field col">
          <Field
              name='searchField'
              component={ RenderInput }
              type='search'
              placeholder='e.g. gluten free italian dessert'
            />
          <button className='waves-effect waves-light btn blue'>search</button>
        </div>
    </form>
    </>
  )
}

export default reduxForm({
  form: 'Search Form',
  // validate
})(SearchBar)
