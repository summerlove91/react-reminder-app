import React, { Component } from 'react';
import Main from './main';
import ReminderListObject from '../JavascriptObjects/reminderListObject';

class AddReminder extends Component{
  constructor(props){
    super(props)
    this.state = {
       list: this.props.list,
       text: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(){
    this.setState((state) => {
      const reminder = state.list.addReminder(this.state.text);
      return reminder;
    })
  }

  render(){
    console.log(this.state.list);
    return(
      <div className="add-reminder-box">
        <input type="text" value={this.state.text} onChange={data => {this.setState({text: data.target.value})}} />
        <input type="button" value="add reminder" onClick={this.onSubmit} />
      </div>
    )
  }
}

export default AddReminder;
