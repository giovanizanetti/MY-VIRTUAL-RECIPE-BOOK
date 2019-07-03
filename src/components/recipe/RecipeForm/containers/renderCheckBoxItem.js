import React from 'react'

export const renderCheckBoxItem = ({ input, label }) => (
      <label>
        <input
            className='filled-in'
            type='checkbox'
            {...input}
        />
        <span>{label}</span>
      </label>
  )
