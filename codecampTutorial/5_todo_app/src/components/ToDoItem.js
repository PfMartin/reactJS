import React from 'react';

class ToDoItem extends React.Component {
  render() {
    const styleComplete = {
      color: '#999',
      fontStyle: 'italic',
      textDecoration: 'line-through'
    }

    return (
      <div className="todo-item">
      <input
        type="checkbox"
        name={this.props.item.name}
        value={this.props.item.value}
        checked={this.props.item.completed}
        onChange={() => this.props.handleChange(this.props.item.id)}
      />

      <label
        htmlFor={this.props.item.name}
        style={this.props.item.completed ? styleComplete : null}> {this.props.item.todo}
      </label>
      </div>
    )
  }
}

export default ToDoItem;