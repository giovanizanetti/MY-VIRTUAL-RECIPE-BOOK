import React from 'react'
import Style from './style'

export default({index, fields, field}) => {
  const { container, removeButton, addIcon, addBtn } = Style.addRemoveButton
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
          style={ addBtn }
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
