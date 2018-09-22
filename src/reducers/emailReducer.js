import emailActions from './../emailActions.js'
const initialState = {
  emailList: []
}

const emailReducer = ( state=initialState, action ) => {
  switch(action.type) {
    case 'FETCHING_EMAILS_SUCCEEDED':
    case emailActions.fetchingEmailsFailed:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default emailReducer;