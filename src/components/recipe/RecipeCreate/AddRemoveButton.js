import React from 'react'

export default({index, fields, field}) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      paddingLeft: '4%'
    }} >
      <button
        style={{
          margin: '10%',
          padding: "0 6px"
        }}
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
          style={{
            display: 'flex',
            justifyContent: 'center'
            }}
        >
          add
        </i>
      </button>
  </div>
)
