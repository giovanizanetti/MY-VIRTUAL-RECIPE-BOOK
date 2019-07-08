import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './containers/renderField'
import AddRemoveButton from './AddRemoveButton'
import style from './style'

export default ({index, field, fields, label, textarea}) => {
  console.log(field, fields, label)
  return (
    <li
      key={index}
      style={style.arrayInputs}
    >
      <div className="container">
        <Field
          name={field}
          type="text"
          component={renderField}
          label={label}
          textarea={textarea}
        />
      </div>
      <AddRemoveButton
        field={field}
        index={index}
        fields={fields}
      />
    </li>
  )
}
