import React from 'react'
import { Field } from 'redux-form'

const renderField = ({ input, label, type, meta: { touched, error, } }) => (
  <div>
    <div>
      <input {...input} type={type} placeholder={label}/>
      {touched && error && <span>{error}</span>}
    </div>
  </div>
)

export const renderIngredients = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button
        style={{margin: '3%'}}
        type="button"
        onClick={() => fields.push({})}
        className="btn"
      >
        Add Ingredients
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
        }}
        >
        <button
          style={{ margin: '3%'}}
          className='btn red right'
          type="button"
          title="Remove Ingredient"
          onClick={() => fields.remove(index)}
        >X</button>
      <div className='container'>
        <Field
          name={`${ingredient}.name`}
          type="number"
          component={renderField}
          label="name"
        />
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
      </li>
    )}
  </ul>
)
