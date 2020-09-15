import React from 'react';

class ToDoItem extends React.Component {
  render() {

    return (
      <div className="todo-item">
      <input
        type="checkbox"
        name={this.props.item.name}
        value={this.props.item.value}
        checked={this.props.item.completed}
        onChange={() => this.props.handleChange(this.props.item.id)}/>

      <label htmlFor={this.props.item.name}> {this.props.item.todo}</label>
      </div>
    )
  }
}

export default ToDoItem;