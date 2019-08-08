import React from 'react'

const RenderCheckBoxItem = ({ input, label }) => (
  <label>
    <input
        className='filled-in'
        type='checkbox'
        {...input}
    />
    <span>{label}</span>
  </label>
)

export default RenderCheckBoxItem
