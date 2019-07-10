// Pure function
export const trimString = (string, length) => {
  return string.length > length
    ? string.substring(0, length -3) + "..."
    : string
}

// This function capitalize all letters from all strings from an array
export const isNumber = elem => /^[0-9]*$/.test(elem)
// Pure function
export const upCaseArrStrings = (arr) => arr.map(word => word.toUpperCase())

// This function:
  // - extract all strings from the array,
  // - check how many items'
  // - separete by commas/'and'
  // - Not pure, depending on upCaseStrings
export const arrToStringPunctuation = (arr) => {
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

//   The timeFormat function:
//  - rounds numbers to the nearest integer
//  - transforms minutes into hours,
//  - check for the correct plural and singular
//  - Pure function
export const timeFormat = (minutes) => {
  if(minutes > 59) {
    const roundedHours = Math.floor(minutes / 60)
    const hours =  roundedHours >= 2 ? `${roundedHours}h` : `${roundedHours}h`
    const min = minutes % 60 === 0 ? '' : ` and ${minutes % 60}min`
    return hours + min
  }
  return minutes + 'min'
}
