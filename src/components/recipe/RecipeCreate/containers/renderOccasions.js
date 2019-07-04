import React from 'react'
import { Field } from 'redux-form'
import { renderField } from './renderField'
import ArrayInputTemplate from '../ArrayInputTemplate'

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
    {
      fields.map((field, index) => (
        < div key={index}>
          <ArrayInputTemplate
            fields={fields}
            field={field}
            index={index}
          />
        </ div>
      )
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)


