import React from 'react'

const style = {
  position: 'relative',
  pointerEvents: 'inherit',
  opacity: 'unset'
}

const Checkbox = props => {
  console.log(props)
  return (
    <input
      style={style}
      type="checkbox"
      onChange={props.onChange}
      id={props.id}
    />
  )
}
export default Checkbox
