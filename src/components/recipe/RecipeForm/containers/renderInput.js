import React from 'react'
import { renderErrors } from './formErrors'
import Cleave from 'cleave.js/react'
import style from '../style'


export const renderInput = ({ input, label, meta, id , type, placeholder }) => {
  const className =
    `input-field col
    ${id === 'prepTime' || id === 'cookingMin' ? 's6': 's12'}
    ${meta.error && meta.touched
      ? 'wrong' : ''}`
    const { spanError } = style
  return (
    <div className={className}>
      <label
        className={ meta.active || meta.dirty? "active" : undefined }>
        {label}
      </label>
      { id === 'prepTime' || id === 'cookingMin'
        ? <>
            <Cleave
              placeholder={ meta.active ? 'hh:mm': null }
              {...input}
              options={{
                time: true,
                timePattern: ['h', 'm']}}
            />
            <span style={ spanError }>
              {renderErrors(meta)}
            </span>
          </>
          :
            <input
              placeholder={ meta.active ?placeholder: null }
              type={type}
              {...input}
              autoComplete='off'
              className={className}
            />
        }
      <span style={ spanError }>
        {renderErrors(meta)}
      </span>
    </div>
  )
}

export default renderInput
