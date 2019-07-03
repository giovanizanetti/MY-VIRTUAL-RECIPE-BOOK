import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'

export const renderOccasions = ({ fields, meta: { error } }) => (
  <ul>
    <li>
    <button
      style={{margin: '3%'}}
      type="button"
      onClick={ () => fields.push() }
      className="btn"
    >
      Add Occasion
    </button>
    </li>
    {fields.map((occassion, index) =>
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
      <div className="container">
        <Field
          name={occassion}
          type="text"
          component={renderField}
          label={'occasion'}
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
            title="Remove Occasion"
            onClick={() => fields.remove(index)}
          >X</button>
          <button
            title="Add Occasion"
            style={{margin: '10%'}}
            type="button"
            onClick={ () => fields.push() }
            className="btn"
          >
            <i class="material-icons" style={{display: 'flex', justifyContent: 'center'}}>add</i>
          </button>
        </div>
      </li>
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)


