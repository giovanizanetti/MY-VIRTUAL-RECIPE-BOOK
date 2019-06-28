import React from 'react'

const EditMessage = () => {
  const ONLY_NUMBERS_REGEX = /^[0-9]*$/
  const IS_SPOONACULAR_ID = ONLY_NUMBERS_REGEX.test(ID)
  return (
    IS_SPOONACULAR_ID &&
    <p>You can not delete this message directly. Do you want to copy this recipe?</p>
  )
}

export default EditMessage
