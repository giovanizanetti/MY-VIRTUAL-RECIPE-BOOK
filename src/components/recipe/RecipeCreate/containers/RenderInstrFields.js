import React from 'react'
import { Field } from 'redux-form'
import AddRemoveButton from '../AddRemoveButton'
import RenderField from './RenderField'
import Style from '../style'
import AddButton from '../AddButton'

const RenderInstrFields = ({ fields }) => {
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
            style={ Style.arrayInputs }
          >
            <div className='container'>
              <Field
                name={`${ field }.step`}
                component={ RenderField }
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

export default RenderInstrFields
