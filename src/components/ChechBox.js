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
      className={props.className}
      style={style}
      type="checkbox"
      onChange={props.onChange}
      value={props.value}
    />
  )
}
export default Checkbox
