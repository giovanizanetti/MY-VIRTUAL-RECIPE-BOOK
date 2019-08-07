import React from 'react'

const Checkbox = props => {
  const style = !props.style && {
    position: 'relative',
    pointerEvents: 'inherit',
    opacity: 'unset'
  }
  return (
    <input
      style={ props.style || style }
      type="checkbox"
      onChange={props.onChange}
      id={props.id}
      value={props.value}
    />
  )
}
export default Checkbox
