import React from 'react'

export default ({item, fields, onClick}) => (
  <button
    style={{margin: '3%'}}
    type="button"
    className={fields.length ? 'hide' : 'btn'}
    onClick={ onClick }
  >
    Add {item}
  </button>
)
