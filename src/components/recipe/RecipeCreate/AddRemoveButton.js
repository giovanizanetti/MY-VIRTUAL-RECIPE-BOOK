import React from 'react'
import style from './style'

export default({index, fields, field}) => {
  const { container, removeButton, addIcon } = style.addRemoveButton
  return (
    <div
      style={ container } >
        <button
          style={ removeButton }
          className='btn red right'
          type="button"
          title={`Remove ${field}`}
          onClick={() => fields.remove(index)}
        >X</button>
        <button
          title={`Add ${field}`}
          style={{margin: '10%'}}
          type="button"
          onClick={ () => fields.push() }
          className="btn"
        >
          <i
            className="material-icons"
            style={ addIcon }
          >
            add
          </i>
        </button>
    </div>
  )
}
