import React from 'react';
import Button from './../components/Button.jsx';
import EmailDetail from './../components/EmailDetail.jsx';
import EmailList from './EmailList.jsx';
import {get} from './../apis/apiHelper.js'
import {connect} from 'react-redux'
import {fetchEmails} from './../action_creators/emailActionCreators.js'

class Dashboard extends React.Component {
  state = {
    emailList: [],
    selected_email: {id: null, subject: null, body: null}
  }

  showEmail = (evt) => {
    console.log(evt.target.id);
    this.setState(
      {
        selected_email: this.state.emailList.find((email => email.id == evt.target.id))
      }
    )
  }

  componentDidMount() {
    get("http://d4cb1993.ngrok.io/mails/inbox/", "", { Authorization: this.props.token })
      .then(jsonResponse => {
        this.setState({ emailList: jsonResponse.data });
      })
      .catch(errorResponse => {
        console.log("2222222222222222", errorResponse);
      });
  }

  render (){
    return (
      <div className='container'>
        <h1>The Dashboard</h1>
        <Button value='Logout' handleOnClick={this.props.logout} />
        <br />
        <EmailList emails={this.state.emailList} showEmail={this.showEmail} />
        <br />
        <EmailDetail email={this.state.selected_email} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state, '111')
  return state.emailReducer
}

export default connect(mapStateToProps, {
  fetchEmails: fetchEmails
})(Dashboard);
