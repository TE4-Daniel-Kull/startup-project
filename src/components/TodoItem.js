import React from 'react';
import {connect} from 'react-redux';

import { toggleTodoDone, removeTodo } from '../redux/todo';

function TodoItem(props) {
    let todoItem = props.todoItem;

    return (
            <li className="todo-list__item">
                <input 
                    className="todo-list__item__input" 
                    type="checkbox" 
                    name="done" 
                    checked={todoItem.done}
                    onChange={() => { props.toggleTodoDone(todoItem.id)}}
                />
                <span>{todoItem.description}</span>
                <button 
                    className="todo-list__item__button"
                    onClick={() => { props.removeTodo(todoItem); }}
                >X</button>
            </li>
    );
}

const mapDispatchToProps = {
    toggleTodoDone: toggleTodoDone,
    removeTodo: removeTodo
}

export default connect(null, mapDispatchToProps)(TodoItem);

/*
* 1 LET USER REMOVE TODO
    * import removeTodo from redux/todo.
    * add removeTodo into mapDispatchToProps.
    * Add a jsx button after the description.
    * Add an onClick event that calls the dispath for removeTodo passing in the todoItem.
*/