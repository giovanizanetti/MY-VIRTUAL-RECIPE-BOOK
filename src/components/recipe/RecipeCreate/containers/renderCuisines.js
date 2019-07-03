import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'

export const renderCuisines = ({ fields, meta: { error } }) => (
  <ul>
    <li>
    <button
      style={{margin: '3%'}}
      type="button"
      onClick={ () => fields.push() }
      className="btn"
    >
      Add Cuisine
    </button>
    </li>
    {fields.map((cuisine, index) =>
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
      <div class="container">
        <Field
          name={cuisine}
          type="text"
          component={renderField}
          label='cuisine'
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
            title="Remove Cuisine"
            onClick={() => fields.remove(index)}
          >X</button>
          <button
            title="Add Cuisine"
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
    {error && <li className="error">{error}</li>}
  </ul>
)


