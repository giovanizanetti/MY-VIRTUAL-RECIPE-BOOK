import React from 'react'
import ArrayInputTemplate from '../ArrayInputTemplate'
import AddButton from '../AddButton'

const RenderOccasions = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <AddButton
        item='occasions'
        fields={fields}
        onClick={ () => fields.push() }
      />
    </li>
    {
      fields.map((field, index) => (
        < div key={index}>
          <ArrayInputTemplate
            fields={fields}
            field={field}
            index={index}
            label='occasion'
          />
        </ div>
      )
    )}
    {error && <li className="error">{error}</li>}
  </ul>
)

export default RenderOccasions

