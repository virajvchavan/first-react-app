import {combineReducers} from 'redux'

const rootReducer = combineReducers(
  {
    emailReducer: {
      emails: []
    }
  }
)

export default rootReducer;