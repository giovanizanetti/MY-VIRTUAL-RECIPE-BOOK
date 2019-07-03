import React from 'react'
import { renderCheckBoxItem } from './containers/renderCheckBoxItem'
import { Field } from 'redux-form'

export default () => (
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
        name="glutenFree"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is gluten free?"
      />
    </div>
    <div>
      <Field
        name="dairyFree"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Dairy free?"
      />
    </div>
    <div>
      <Field
        name="vegan"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Vegan?"
      />
    </div>
    <div>
      <Field
        name="vegetarian"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Vegetarian?"
      />
    </div>
    <div>
      <Field
        name="lowFodmap"
        component={ renderCheckBoxItem }
        type="checkbox"
        label="is Low Fodmap?"
      />
    </div>
  </div>
)

