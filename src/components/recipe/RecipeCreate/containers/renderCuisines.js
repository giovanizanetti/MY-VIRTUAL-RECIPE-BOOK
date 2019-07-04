import React from 'react'
import ArrayInputTemplate from '../ArrayInputTemplate.js'

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
    {
      fields.map((field, index) => (
        <div key={index}>
          <ArrayInputTemplate
            fields={fields}
            field={field}
            index={index}
          />
        </div>
        )
      )
    }
    {error && <li className="error">{error}</li>}
  </ul>
)


