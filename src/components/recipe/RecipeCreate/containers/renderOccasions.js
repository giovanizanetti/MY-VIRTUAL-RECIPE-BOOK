import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'

export const renderOccasions = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <button
        style={{margin: '3%'}}
        type="button"
        onClick={ () => fields.push({}) }
        className="btn"
      >
        Add Occasion
      </button>
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {fields.map((occasion, index) =>
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
          name={occasion[index]}
          type="text"
          component={renderField}
          label='occasion'
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-evenly',
          paddingLeft: '4%'
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
