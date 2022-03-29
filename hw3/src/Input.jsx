import React, { Component } from 'react';
import App from './App';
import TodoList from './TodoList';


class Input extends Component {
  render(){
    return(
      <input class="new-todo" placeholder="What needs to be done?" onChange={props.inputChange} value={props.state.inputValue}/> 
    )
  }
}

export default TodoItem;

// ReactDom.render(<TodoList />,document.getElementById("root"));
