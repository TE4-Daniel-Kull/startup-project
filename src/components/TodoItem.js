import React from 'react';

function TodoItem(props) {
    let todoItem = props.todoItem;

    return (
            <li className="todo-list__item">
                <input 
                    className="todo-list__item__input" 
                    type="checkbox" 
                    name="done" 
                    checked={todoItem.done}
                    onChange={() => { props.handleChange(todoItem.id)}}
                />
                <span>{todoItem.description}</span>
            </li>
    );
}

export default TodoItem;