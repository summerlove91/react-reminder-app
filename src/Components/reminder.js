import React, { Component } from 'react';

class Reminder extends Component {
    constructor(props){
        super(props);
        this.state = {
            reminder: this.props.reminder,
            reminderList: this.props.reminderList,
            editToggle: true,
            text: this.props.reminder.value,
            value: ""
        }
        this.handleEditToggle = this.handleEditToggle.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleEditToggle(){
        // e.preventDefault();
        this.setState({
          editToggle: !this.state.editToggle
        })
    }

    handleEdit(){
      this.setState({
        reminder: this.state.reminder.editText(this.state.text),
        reminderList: this.state.reminderList.editReminder(this.state.reminder.id, this.state.reminder.value)
      })
      this.handleEditToggle();
    }

    handleChange(field){
      return e => {
        this.setState({ [field]: e.target.value});
      }
    }

    render(){
     
        if(this.state.editToggle){
            return(
                <div>
                  {this.state.reminder.value} 
                  <input type="button" value="edit" onClick={this.handleEditToggle} />
                  {/* <input type="button" value="delete" onClick={this.handleDelete} /> */}
                </div>
              )
            }else{
              return(
                <div>
                  {this.state.reminder.value}
                  <input type="text" value={ this.state.text } onChange={this.handleChange('text')} />
                  <button onClick={ this.handleEdit }>edit</button> 
                </div>
              )
            }
    }
}

export default Reminder;