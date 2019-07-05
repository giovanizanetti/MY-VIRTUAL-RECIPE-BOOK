import React from 'react'
import ArrayInputTemplate from '../ArrayInputTemplate'
import AddButton from '../AddButton'

export const renderInstructions = ({ fields, meta: { touched, error, submitFailed } }) => (
  <ul>
    <li>
      <AddButton
        item='instructions'
        fields={fields}
        onClick={ () => fields.push() }
      />
      {(touched || submitFailed) && error && <span>{error}</span>}
    </li>
    {
      fields.map((field, index) => (
        < div key={index}>
          <ArrayInputTemplate
            fields={fields}
            field={field}
            index={index}
            label='instruction'
            textarea={true}
          />
        </ div>
      )
    )}

          </ul>
)
