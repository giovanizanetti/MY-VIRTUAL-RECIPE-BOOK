import React from 'react'
import RenderCheckBoxItem from './containers/RenderCheckBoxItem'
import { Field } from 'redux-form'
import Style from './Style'

export default () => {
  const { container } = Style.allergensField
  return (
    <div
      style={ container }
      className='container'
    >
      <div>
        <Field
          name="glutenFree"
          component={ RenderCheckBoxItem }
          type="checkbox"
          label="is gluten free?"
        />
      </div>
      <div>
        <Field
          name="dairyFree"
          component={ RenderCheckBoxItem }
          type="checkbox"
          label="is Dairy free?"
        />
      </div>
      <div>
        <Field
          name="vegan"
          component={ RenderCheckBoxItem }
          type="checkbox"
          label="is Vegan?"
        />
      </div>
      <div>
        <Field
          name="vegetarian"
          component={ RenderCheckBoxItem }
          type="checkbox"
          label="is Vegetarian?"
        />
      </div>
      <div>
        <Field
          name="lowFodmap"
          component={ RenderCheckBoxItem }
          type="checkbox"
          label="is Low Fodmap?"
        />
      </div>
    </div>
  )
}

