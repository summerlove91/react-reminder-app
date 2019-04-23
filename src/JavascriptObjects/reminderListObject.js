import Reminder from './reminder'

class ReminderListObject {
  constructor(){
    this.list=[];
  }

  get(id){
    for(let item=0; item <this.list.length; item++){
      if(this.list[item].id === id){
        return this.list[item];
      }
    }
  }

  editReminder(id, newValue){
    console.log(this.list)
    let oldReminder = this.get(id);
    return oldReminder.editText(newValue);
  }

  deleteReminder(id){
    for(let item = 0; item <this.list.length; item++){
      if(this.list[item].id === id){
        var index = item;
      }
    }
    // console.log(this.list);
    this.list.splice(index,1);

    return this;
  }

  addReminder(value){
    let newReminder = new Reminder(value);
    this.list.push(newReminder);
  }
};

export default ReminderListObject;
