import React from 'react'
import { Field } from 'redux-form'
import AddRemoveButton from '../AddRemoveButton'
import {renderField} from './renderField'
import style from '../style'
import AddButton from '../AddButton'

export const renderInstrFields = ({ fields }) => {
  return (
    <div>
      <AddButton
        item='instructions'
        fields={ fields }
        onClick={ () => fields.push({}) }/>
      { fields.map((field, index) => {
        return (
          <div
            key={ index }
            style={ style.arrayInputs }
          >
            <div className='container'>
              <Field
                name={`${ field }.step`}
                component={ renderField }
                label="instruction"
                textarea={ true }
              />
            </div>
            <AddRemoveButton
              field={ field }
              index={ index }
              fields={ fields }
            />
          </div>
        )
      })}
    </div>
  )

}
