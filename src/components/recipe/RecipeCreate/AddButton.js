import React from 'react'
import style from './style'

export default ({item, fields, onClick}) => (
  <button
    style={style.addButton}
    type="button"
    className={fields.length ? 'hide' : 'btn'}
    onClick={ onClick }
  >
    Add {item}
  </button>
)
