import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'
import AddRemoveButton from '../AddRemoveButton'
import AddButton from '../AddButton'
import style from '../style'

export const renderIngredients = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <AddButton
        item='ingredients'
        fields={fields}
        onClick={ () => fields.push({})}
      />
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((field, index) =>
      <li
        key={index}
        style={style.arrayInputs}
        >
        <div className='container'>
          <Field
            name={`${field}.name`}
            type="text"
            component={renderField}
            label="name"
          />
          <div style={{ display: 'flex' }}>
            <Field
              name={`${field}.measures.metric.amount`}
              type="number"
              component={renderField}
              label="Amount"
            />
            <Field
              name={`${field}.measures.metric.unitShort`}
              type="text"
              component={renderField}
              label="Unit"
            />
          </div>
        </div>
        <AddRemoveButton
          field={field}
          index={index}
          fields={fields}
        />
      </li>
    )}
  </ul>
)
