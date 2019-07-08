import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'
import { Redirect } from 'react-router-dom'
import { validate } from './containers/formErrors'
import { renderInput } from './containers/renderInput'
import AllergensFields from './AllergensFields'
import PrepTimeInputs from './PrepTimeInputs'
import IngredientsInputs from './IngredientsInputs'
import OccasionsInputs from './OccasionsInputs.js'
import CuisinesInput from './CuisinesInput'
import InstructionsInputs from './InstructionsInputs'
// import ImageUploader from 'react-images-upload'

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
          label='Title'
          placeholder='My recipe name'
        />
        <PrepTimeInputs />
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

        {/* <ImageUploader
          withIcon={true}
          buttonText='Choose images'
          onChange={this.onDrop}
          imgExtension={['.jpg', '.gif', '.png', '.gif']}
          maxFileSize={5242880}
          name='image'
        /> */}
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
