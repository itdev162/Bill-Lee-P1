import React, { Component } from "react";
import ToDoItems from "./ToDoItems";
import "./ToDoList.css";


class ToDoList extends Component {

    //Event handler for addItem
    constructor(props) {
        super(props);

        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    }

    //Handle all the delete functionality
    deleteItem(key) {
  var filteredItems = this.state.items.filter(function (item) {
    return (item.key !== key);
  });
 
  this.setState({
    items: filteredItems
  });
}

    //Store the entered text and unique key value set
    addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value,
      key: Date.now()
    };
    
    // Ensuring our state object isn't modified. 
    // We are instead giving it an entirely new array made up of both 
    // the existing items data along with the newly entered data.
    this.setState((prevState) => {
      return { 
        items: prevState.items.concat(newItem) 
      };
    });
   
    this._inputElement.value = "";
  }
   
  console.log(this.state.items);
     
  e.preventDefault();
}


    
//Creating UI Elements (input,button,add,removing,displaying)
    render() {
        return (
        <div className="todoListMain">
            <div className="header">
                <form onSubmit={this.addItem}>
                    <input  ref ={(a) => this._inputElement = a}
                                placeholder="enter task">
                    </input>
                    <button type="submit">add</button>
                </form>
            </div>
            <ToDoItems entries={this.state.items}
                        delete={this.deleteItem}/>
        </div>
        );
    }
}

export default ToDoList;