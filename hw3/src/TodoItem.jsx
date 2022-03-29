import React, { Component } from 'react';
import App from './App';

import TodoList from './TodoList';
import './APP.css';

class TodoItem extends Component {
  deleteItem = () => {
    this.props.deleteItem(this.props.index);
  };

  render() {
    return (
      <li>
        <div class="view">
          <input class="toggle" type="checkbox" />
          <label>{this.props.item}</label>
          {/* {this.props.item} */}
          <button class="destroy" onClick={this.deleteItem}></button>
        </div>
        {/* <input class="edit" value="3"/> */}
        {/* <button class="destroy" onClick={this.deleteItem}></button> */}
      </li>
    );
  }
}

export default TodoItem;

// ReactDom.render(<TodoList />,document.getElementById("root"));
