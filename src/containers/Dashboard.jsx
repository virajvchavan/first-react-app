import React from 'react';
import Button from './../components/Button.jsx';
import EmailDetail from './../components/EmailDetail.jsx';
import EmailList from './EmailList.jsx';

class Dashboard extends React.Component {
  state = {
    emails: [
      { subject: 'Subject 1', body: 'Body 1' },
      { subject: 'Subject 2', body: 'Body 2' },
      { subject: 'Subject 3', body: 'Body 3' },
      { subject: 'Subject 4', body: 'Body 4' },
      { subject: 'Subject 5', body: 'Body 5' }
    ],
    selected_email_id: 0
  }

  showEmail = (evt) => {
    console.log(evt.target.id);
    this.setState(
      { selected_email_id: evt.target.id }
    )
  }  

  render (){
    return (
      <div>
        <h1>The Dashboard</h1>
        <Button value='Logout' handleOnClick={this.props.logout} />
        <br />
        <EmailList emails={this.state.emails} showEmail={this.showEmail} />
        <br />
        <EmailDetail email={this.state.emails[this.state.selected_email_id]} />
      </div>
    )
  }
}

export default Dashboard