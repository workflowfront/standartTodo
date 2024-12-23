import React from 'react';
import './todo-list-item.css';

const TodoListItem = (props) => {

  const {
    label,
    onDeleted,
    onToggleImportant,
    onToggleDone,
    done,
    important } = props;

  let classNames = 'todo-list-item';
  if (done) {
    classNames += ' done';
  }
  if (important) {
    classNames += ' important';
  }

  return (
    <span className={ classNames }>
      <span
        onClick={ onToggleDone }
        className="todo-list-item-label">
        {label}
      </span>

      <button
        onClick={ onToggleImportant }
        type="button"
        className="btn btn-outline-success btn-sm float-right">
        <i className="fa fa-exclamation" />
      </button>

      <button
        onClick={ onDeleted }
        type="button"
        className="btn btn-outline-danger btn-sm float-right">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
}

export default TodoListItem;