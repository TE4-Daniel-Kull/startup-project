import React from 'react';
import {connect} from 'react-redux';

import { toggleTodoDone } from '../redux/todo';

function TodoItem(props) {
    let todoItem = props.todoItem;

    return (
            <li className="todo-list__item">
                <input 
                    className="todo-list__item__input" 
                    type="checkbox" 
                    name="done" 
                    checked={todoItem.done}
                    onChange={() => { this.props.toggleTodoDone(todoItem.id)}}
                />
                <span>{todoItem.description}</span>
            </li>
    );
}

const mapDispatchToProps = {
    toggleTodoDone: toggleTodoDone
}

export default connect(() => {}, mapDispatchToProps)(TodoItem);