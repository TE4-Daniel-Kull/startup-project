import React from 'react';
import TodoItem from './TodoItem';
import MockupData from '../MockupData.js'

/*function TodoList() {
    let todoItems = MockupData.todoItems;
    let todoComponents = todoItems.map(todoItem => <TodoItem todoItem={todoItem} />)

    return (
        <ul className="todo-list">
            {todoComponents}
        </ul>
    );
}*/

class TodoList extends React.Component {

    constructor() {
        super();

        this.state = {
            todoItems: MockupData.todoItems
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState((prevState) => {
            let updatedTodoItems = prevState.todoItems.map((todo) => {
                if(todo.id === id) {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
                
                return todo;
            });

            return {todoItems: updatedTodoItems};
        });
    }
    
    render() {
        let todoComponents = this.state.todoItems.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} handleChange={this.handleChange} />)
        return (
            <ul className="todo-list">
                {todoComponents}
            </ul>
        );
    }
}

export default TodoList;