import React from 'react'
import Style from './style'

export default ({item, fields, onClick}) => (
  <button
    style={Style.addButton}
    type="button"
    className={fields.length ? 'hide' : 'btn'}
    onClick={ onClick }
  >
    Add {item}
  </button>
)
