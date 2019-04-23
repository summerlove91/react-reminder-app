import React, { Component } from 'react';
import AddReminder from './addReminder';
import Reminder from '../JavascriptObjects/reminder';
import ReminderListObject from '../JavascriptObjects/reminderListObject';
import ReminderList from './reminderList';

class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
      list: new ReminderListObject(),
      add: true,
      editToggle: true,
      editText: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.setState({
      add: !this.state.add
    })
  }

  render(){
    console.log(this.state.list);
    if (this.state.add) {
      return (
        <div>
          <ul><ReminderList reminderList={this.state.list} /></ul>
          <input type="button" value="Add new Reminder" onClick={this.handleClick} />
        </div>
      )
    } else {
      return (
        <div>
          <AddReminder list={this.state.list} />
          <input type="button" value="Go back to dashboard" onClick={this.handleClick} />
        </div>
      )
    }
  }
}

export default Main;
