import React from 'react'
import ArrayInputTemplate from '../ArrayInputTemplate.js'
import AddButton from '../AddButton'

export const renderCuisines = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <AddButton
            item='cuisine'
            fields={fields}
            onClick={ () => fields.push() }
          />
    </li>
    {
      fields.map((field, index) => (
        <div key={index}>
          <ArrayInputTemplate
            fields={fields}
            field={field}
            index={index}
            label='cuisine'
          />
        </div>
        )
      )
    }
    {error && <li className="error">{error}</li>}
  </ul>
)


