import React from 'react'
import { renderErrors } from './formErrors'
import Cleave from 'cleave.js/react'
import style from '../style'


export const renderInput = ({ input, label, meta, id , type, placeholder }) => {
  const { touched, error, active, dirty, initial } = meta
  const className =
    `input-field col
    ${id === 'prepTime' || id === 'cookingMin' ? 's6': 's12'}
    ${error && touched
      ? 'wrong' : ''}`
    const { spanError } = style
  return (
    <div className={className}>
      <label
        className={ active || dirty || initial? "active" : undefined }>
        {label}
      </label>
      { id === 'prepTime' || id === 'cookingMin'
        ? <>
            <Cleave
              placeholder={ active ? 'hh:mm': null }
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
              placeholder={ active ? placeholder: null }
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
