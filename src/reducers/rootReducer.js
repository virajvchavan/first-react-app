import {combineReducers} from 'redux'
import {emailReducer} from './emailReducer.js'

const rootReducer = combineReducers(
  {
    emailReducer: {
      emails: []
    }
  }
)

export default rootReducer;