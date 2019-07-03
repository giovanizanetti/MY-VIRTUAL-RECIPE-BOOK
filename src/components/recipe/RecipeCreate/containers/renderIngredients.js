import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'

export const renderIngredients = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button
        style={{margin: '3%'}}
        type="button"
        onClick={() => fields.push({})}
        className="btn"
      >
        Add Ingredient
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((ingredient, index) =>
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
        <div className='container'>
          <Field
            name={`${ingredient}.name`}
            type="text"
            component={renderField}
            label="name"
          />
          <div style={{ display: 'flex' }}>
            <Field
              name={`${ingredient}.measures.metric.amount`}
              type="number"
              component={renderField}
              label="Amount"
            />
            <Field
              name={`${ingredient}.measures.metric.unitShort`}
              type="text"
              component={renderField}
              label="Unit"
            />
          </div>
        </div>
        <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingLeft: '4%',
              justifyContent: 'space-evenly'
            }} >
            <button
              style={{
                margin: '10%',
                padding: "0 6px"
              }}
              className='btn red right'
              type="button"
              title="Remove Ingredient"
              onClick={() => fields.remove(index)}
            >X</button>
            <button
              style={{margin: '10%'}}
              type="button"
              onClick={ () => fields.push({}) }
              className="btn"
            >
              +
            </button>
          </div>
      </li>
    )}
  </ul>
)
