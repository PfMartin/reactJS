import React from 'react';

import ToDoItem from './ToDoItem.js';
import taskData from './data/tasks.js';

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: taskData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    console.log(`Id ${id} changed.`);
    this.setState(prevState => {
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo //Store every todo in updatedTodos
      })
      // Replace todos with updatedTodos
      return {
        todos: updatedTodos
      }
    })
  }

  render() {
    const toDoItems = this.state.todos.map(item => {
      return (
        <ToDoItem key={item.id} item={item} handleChange={this.handleChange}/>)
      })
    console.log(this.state);

    return (
      <main>
        <h1>Todos</h1>
        <div className="todos">

          {toDoItems}

        </div>
      </main>
    )
  }
}

export default MainContent