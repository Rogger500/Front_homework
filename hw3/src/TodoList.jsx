import React, { Component } from 'react';
import ReactDom from 'react-dom';

import TodoItem from './TodoItem';
import './APP.css'

// TodoList组件
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todolist: ['会自动提示空输入','可以增加/删除', '模仿了UI', "可以勾选checkbox",'会自动浮现删除叉叉',"会显示多少items left"],
      inputValue: '',
    };
  }

  componentDidMount() {
    // 判断localStorage是否存在
    const list = localStorage.getItem('todolist');
    if (list && list.length !== 0) {
      this.setState({
        todolist: list.split(','),
      });
    }
  }
  // 监听输入框里面的内容
  inputChange = e => {
    //  console.log(e.target.value)
    this.setState({
      inputValue: e.target.value,
    });
  };
  // 增加数据
  addItem = () => {
    if (this.state.inputValue === '') {
      alert('请输入内容！');
      return;
    }
    this.setState({
      todolist: [...this.state.todolist, this.state.inputValue],
      inputValue: '',
    });
    localStorage.setItem('todolist', [
      ...this.state.todolist,
      this.state.inputValue,
    ]);
  };

  // 删除数据
  deleteItem = index => {
    // console.log("del");
    let list = [...this.state.todolist];
    list.splice(index, 1);
    this.setState({
      todolist: list,
    });
    localStorage.setItem('todolist', list);
  };

  //绑定键盘事件
  inputKeyUp = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      this.addItem();
    }
  };

  render() {
    return (
      <div>
        <section class="todoapp">
          <div>
{/* header */}
            <header class="header">
              <h1>todos</h1>
              <input
                class="new-todo"
                id="new-todo"
                placeholder="What needs to be done?"
                onChange={this.inputChange}
                value={this.state.inputValue}
                onKeyUp={this.inputKeyUp}
              />
            </header>
{/* body */}
            <body class="learn-bar">
              <section class="main">
                <input id="toggle-all" class="toggle-all" type="checkbox" />
                <label for="toggle-all"> </label>
                <ul class="todo-list">
                  {this.state.todolist.map((item, index) => {
                    return (
                      <TodoItem
                        item={item}
                        key={index}
                        index={index}
                        deleteItem={this.deleteItem}
                      />
                    );
                  })}
                </ul>
              </section>
            </body>
{/* footer */}
            <footer class="footer">
              <span class="todo-count">
                <span> {this.state.todolist.length} </span>
                <span>items </span>
                <span>left </span>
              </span>
              <ul class="filters">
                <li>
                <a href="#/" class="selected">All</a>
                </li>
                <span></span>
                <li>
                  <a href="#/active">Active</a>
                </li>
                <span></span>
                <li>
                  <a href="#/completed">Completed</a>
                </li>
              </ul>
            </footer>
          </div>
        </section>
        <footer class="info">
            <p> Developed by Rogger </p>
            <p><a href="https://github.com/Rogger500/Front_homework">My Github</a></p>
            <p> 2022 3 </p>
        </footer>
      </div>
    );
  }
}

export default TodoList;
