import React from 'react'
import { Field } from 'redux-form'
import RenderField from './RenderField'
import AddRemoveButton from '../AddRemoveButton'
import AddButton from '../AddButton'
import Style from '../style'

const RenderIngredients = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <AddButton
        item='ingredients'
        fields={ fields }
        onClick={ () => fields.push({})}
      />
      {(touched || submitFailed) && error && <span>{ error }</span>}
    </li>
    {fields.map((field, index) =>
      <li
        key={index}
        style={Style.arrayInputs}
        >
        <div className='container'>
          <Field
            name={`${field}.name`}
            type="text"
            component={ RenderField }
            label="name"
          />
          <div style={{ display: 'flex' }}>
            <Field
              name={`${field}.measures.metric.amount`}
              type="number"
              component={ RenderField }
              label="Amount"
            />
            <Field
              name={`${field}.measures.metric.unitShort`}
              type="text"
              component={ RenderField }
              label="Unit"
            />
          </div>
        </div>
        <AddRemoveButton
          field={ field }
          index={ index }
          fields={ fields }
        />
      </li>
    )}
  </ul>
)
 export default RenderIngredients
