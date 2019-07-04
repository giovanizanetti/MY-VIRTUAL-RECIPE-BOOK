import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './containers/renderField'
import AddRemoveButton from './AddRemoveButton'

export default ({index, field, fields}) => {
  return (
    <li
        key={index}
        style={{
          background: 'lightgoldenrodyellow',
          border: 'solid 5px #020202',
          borderRadius: '5%',
          margin: '3%',
          display: 'flex',
          padding: '2%'
        }}
      >
      <div className="container">
        <Field
          name={field}
          type="text"
          component={renderField}
          label={`Add ${field}`}
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
