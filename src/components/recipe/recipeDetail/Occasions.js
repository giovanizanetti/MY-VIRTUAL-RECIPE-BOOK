import React from 'react'

const Occasions = ({occasions}) => {

  // This function capitalize all letters from all strings from the array
  const upCaseArrStrings = (arr) => arr.map(word => word.toUpperCase())

  //This function:
  // - extract all strings from the array,
  // - check how many items'
  // - separete by commas/'and'
  const arrToStringPunctuation = (arr) => {
    if(arr && arr.length >= 0) {
      if(arr.length === 1) return upCaseArrStrings(arr)[0]
      if(arr.length === 2) return upCaseArrStrings(arr).join(' and ')

      //This statement separete all items by commas and add 'and' for the last index
      if(arr.length > 2) {
        const addEnd = ' and ' + upCaseArrStrings(arr).splice(-1)
        const addComma =  upCaseArrStrings(arr).slice(0, -1).join(', ')
        return addComma + addEnd
      }
      return null
    }
  }

  const displayOcassion =
    arrToStringPunctuation(occasions) !== null
    ? `This recipe is a perfect combination for ${arrToStringPunctuation(occasions)}.`
    : null

  return <div className='container'>{displayOcassion}</div>
}

export default Occasions
