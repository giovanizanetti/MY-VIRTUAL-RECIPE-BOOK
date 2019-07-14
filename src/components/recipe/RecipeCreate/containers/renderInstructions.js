import React from 'react'
import AddButton from '../AddButton'
import { FieldArray } from 'redux-form'
import { renderInstrFields } from './renderInstrFields';

export const renderInstructions = ({ fields, meta: { touched, error, submitFailed } }) => {
  console.log(fields, 'something')
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
            fields.map((field, index) => {
              return (
              <li
                key={ index }
                // style={ style.arrayInputs }
              >
                <FieldArray
                  name={`${field}.steps`}
                  type="text"
                  component={renderInstrFields}
                  label="instruction"
                />
              </li>
            )}
          )}
    </ul>
  )
}
