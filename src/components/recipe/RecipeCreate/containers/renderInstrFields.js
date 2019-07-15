import React from 'react'
import { Field } from 'redux-form'
import AddRemoveButton from '../AddRemoveButton'
import {renderField} from './renderField'
import style from '../style'
import AddButton from '../AddButton'

export const renderInstrFields = (props) => {
  return (
    <div>
      <AddButton
        item='instructions'
        fields={props.fields}
        onClick={ () => props.fields.push({}) }/>
      { props.fields.map((field, index) => {
        return (
          <div
            key={ index }
            style={ style.arrayInputs }
          >
            <div className='container'>
              <Field
                name={`${field}.step`}
                component={renderField}
                label="instruction"
                textarea={true}
              />
            </div>
            <AddRemoveButton
              field={field}
              index={index}
              fields={props.fields}
            />
          </div>
        )
      })}
    </div>
  )

}
