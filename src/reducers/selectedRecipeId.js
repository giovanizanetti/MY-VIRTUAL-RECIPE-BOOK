import {
    SET_RECIPE
} from '../actions/types'

//strategy:
// Save id of what recipe we are looking for in redux
// Select recipe from firestore or spoontacular in map stat to props
// because we have all the data in map state to props
  
export default (state=null, action) => {
    switch (action.type) {
        case SET_RECIPE:
            return action.payload.id
        default:
            return state
    }
}