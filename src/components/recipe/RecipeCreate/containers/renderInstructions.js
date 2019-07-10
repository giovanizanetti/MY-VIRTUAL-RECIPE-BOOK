import React from 'react'
import AddButton from '../AddButton'
import { Field } from 'redux-form'
import { renderField } from './renderField'
import style from '../style'
import AddRemoveButton from '../AddRemoveButton'

// There is a bug here. I am trying to retrive the values of instructions,
// I cannot get it correct.

export const renderInstructions = ({ fields, meta: { touched, error, submitFailed } }) => {
  console.log(fields)
  return (
    <ul>
      <li>
        <AddButton
          item='instructions'
          fields={fields}
          onClick={ () => fields.push({}) }
        />
        {(touched || submitFailed) && error && <span>{error}</span>}
      </li>
          {
            fields.map((field, index) => (
              <li
                key={ index }
                style={ style.arrayInputs }
              >
                <div className='container'>
                  <Field
                    name={`${field}.steps`}
                    type="text"
                    component={renderField}
                    label="instruction"
                  />
                </div>
                <AddRemoveButton
                  field={field}
                  index={index}
                  fields={fields}
                />
              </li>
            )
          )}
    </ul>
  )
}
