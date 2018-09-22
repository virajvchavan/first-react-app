import {get} from '../apis/apiHelper.js'
import emailActions from '../actions/emailActions.js'

const fetchingEmailsSucceeded = (emailList=[]) => {
  return {
    type: "FETCHING_EMAILS_SUCCEEDED",
    payload: {
      emailList
    }
  }
}

const fetchingEmailsFailed = (errorMsg) => {
  return {
    type: "FETCHING_EMAILS_FAILED",
    payload: {
      errorMsg
    }
  }
}

export const fetchEmails = () => {
  return dispatch => {
    // dispatch(initiateEmailFetch())

    return get("http://d4cb1993.ngrok.io/mails/inbox/", "")
    .then(jsonResponse => {
      dispatch(fetchingEmailsSucceeded
      (jsonResponse.data))
    })
    .catch(errorResponse => {
      dispatch(fetchingEmailsFailed
      (errorResponse.message))
    })
  }
}
