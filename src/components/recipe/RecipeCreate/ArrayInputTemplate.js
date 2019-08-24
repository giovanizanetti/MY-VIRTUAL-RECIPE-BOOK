import React from 'react'
import { Field } from 'redux-form'
import RenderField from './containers/RenderField'
import AddRemoveButton from './AddRemoveButton'
import Style from './style'

export default ({ index, field, fields, label, textarea }) => {
  return (
    <li
      key={index}
      style={ Style.arrayInputs }
    >
      <div className="container">
        <Field
          name={ field }
          type="text"
          component={ RenderField }
          label={ label }
          textarea={ textarea }
        />
      </div>
      <AddRemoveButton
        field={ field }
        index={ index }
        fields={ fields }
      />
    </li>
  )
}
