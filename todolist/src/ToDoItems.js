import React, { Component } from "react";
 

//Function taking list of to do and turning them into JSX/HTML elements
class TodoItems extends Component {

   constructor(props) {
    super(props);
 
    //Create task
    this.createTasks = this.createTasks.bind(this);
  }
  
    //Delete task
  createTasks(item) {
  return <li onClick={() => this.delete(item.key)} 
              key={item.key}>{item.text}</li>
}
    delete(key) {
        this.props.delete(key);
    }

 
  //Store listItems variable in array li element
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
 

    //Show list element on screen
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;