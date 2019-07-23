import React from 'react'
import { Field, reduxForm } from 'redux-form'
import renderInput from './recipe/RecipeForm/containers/renderInput'

const SearchBar = (props) => {
  const onSubmit = formValues => {
    props.onSubmit(formValues)
  }

  return (
    <>
      <form onSubmit={ props.handleSubmit(onSubmit) }>
        <div className="input-field col" style={{display: 'flex', justifyContent: 'space-between'}}>
          <Field
              name='searchField'
              component={renderInput}
              type='search'
              placeholder='e.g. gluten free italian dessert'
            />
          <button className='waves-effect waves-light btn blue'>search</button>
        </div>
    </form>
  {/* { props.id === 'firestore' &&
    <div className="input-field">
      <input onChange={props.hanfleSearch} id="search" type="search" required />
      <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
    </div>

  } */}
    </>
  )
}

export default reduxForm({
  form: 'Search Form',
  // validate
})(SearchBar)
