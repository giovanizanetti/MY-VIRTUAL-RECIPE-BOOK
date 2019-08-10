import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { validate } from './containers/FormErrors'
import RenderInput from './containers/RenderInput'
import AllergensFields from './AllergensFields'
import PrepTimeInputs from './PrepTimeInputs'
import IngredientsInputs from './IngredientsInputs'
import OccasionsInputs from './OccasionsInputs.js'
import CuisinesInput from './CuisinesInput'
import InstructionsInputs from './InstructionsInputs'
import ImgInput from './ImgInput'

//This is a template form that can be imported by RecipeCreate and RecipeEdit
class RecipeForm extends Component {
  onSubmit = formValues => {
    const { onSubmit } = this.props
    onSubmit(formValues)
    return <Redirect to={`/myRecipes/`} />
  }

  render() {
    const { handleSubmit } = this.props
    return (
      <form
        onSubmit={ handleSubmit(this.onSubmit) }
        className='container wrong col s12'>
        <Field
          name='title'
          component={ RenderInput }
          type='text'
          label='Title'
          placeholder='My recipe name'
        />
        <PrepTimeInputs />
        <Field
          name='servings'
          component={ RenderInput }
          type='number'
          label='Servings'
          placeholder='2 (people)'
        />
        <div>
          <h5>Ingredients</h5>
          <hr/>
          <IngredientsInputs />
        </div>

        <div>
          <h5>Occasions</h5>
          <hr/>
          <OccasionsInputs />
        </div>

        <div>
          <h5>Cuisines</h5>
          <hr/>
          <CuisinesInput />
        </div>

        <div>
          <h5>Instructions</h5>
          <hr/>
          <InstructionsInputs />
        </div>

        <AllergensFields />

        <div>
          <h5>Image</h5>
          <hr/>
          <br />
          <ImgInput />
        </div>
        <button
          type='submit'
          className="btn pink waves-effect waves-light"
          style={{ maxWidth: '50%', margin: '8% auto', display: 'flex' }}
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
