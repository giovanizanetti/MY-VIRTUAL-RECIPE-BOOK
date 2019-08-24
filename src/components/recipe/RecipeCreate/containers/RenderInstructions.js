import React from 'react'
import AddButton from '../AddButton'
import { FieldArray } from 'redux-form'
import RenderInstrFields from './RenderInstrFields';

const RenderInstructions = ({ fields, meta: { touched, error, submitFailed } }) => {
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
              >
                <FieldArray
                  name={`${field}.steps`}
                  type="text"
                  component={ RenderInstrFields }
                  label="instruction"
                />
              </li>
            )}
          )}
    </ul>
  )
}

export default RenderInstructions
