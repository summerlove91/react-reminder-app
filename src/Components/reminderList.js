import React, { Component } from 'react';
import Reminder from './reminder';

class ReminderList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reminderList: this.props.reminderList,
      text: ''
    }
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id){
    console.log(this.state.reminderList);
    return e =>{
      this.setState({
        reminderList: this.state.reminderList.deleteReminder(id)
      })
    }
  }

    mapReminder() {
      const reminder = this.state.reminderList.list.map(item => {
        return(
          <div key={item.id}>
            <Reminder reminder={item} reminderList={this.state.reminderList} key={item.id} />
            <input type="button" value="delete" onClick={ this.handleDelete(item.id) } />
          </div>
        )
      })
      return reminder;
    }

    render() {
      return (
        <div>
          {this.mapReminder()}
        </div>
      );
    }
}

export default ReminderList;
