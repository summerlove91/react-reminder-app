import uuid from 'uuid';

class Reminder {
  constructor(value){
    this.value = value;
    this.id = uuid.v1();
  }

  editText(text){
    this.value = text;
    return this;
  }
}


export default Reminder;
