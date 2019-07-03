import React from 'react'
import { renderCheckBoxItem } from './containers/renderCheckBoxItem'
import { Field } from 'redux-form'

const AllergensFiels = () => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      margin: '10%'
    }}
    className='container'
  >
    <div>
      <Field
        name="isGlutenFree"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is gluten free?"
      />
    </div>
    <div>
      <Field
        name="isDairyFree"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Dairy free?"
      />
    </div>
    <div>
      <Field
        name="isVegan"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Vegan?"
      />
    </div>
    <div>
      <Field
        name="isVegetarian"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Vegetarian?"
      />
    </div>
    <div>
      <Field
        name="isLowFodmap"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Low Fodmap?"
      />
    </div>
  </div>
)

export default AllergensFiels
