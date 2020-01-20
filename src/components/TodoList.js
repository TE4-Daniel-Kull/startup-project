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
            todoItems: MockupData.todoItems,
            isLoading: true,
            loadingMessage: "Loading all your shit",
            dynamicLoadingMessage: "",
            loadingCount: 0
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

    componentDidMount() { // Faking api loadtime
        setTimeout(() => {
            this.setState(() => {
                return {isLoading: false};
            });
        }, 2000);

        this.loadingDots();
    }

    loadingDots() {
        if(!this.state.isLoading) return;

        setTimeout(() => {
            this.setState((prevState) => {
                let dots = ".".repeat(prevState.loadingCount);

                return {dynamicLoadingMessage: prevState.loadingMessage + dots, loadingCount: (prevState.loadingCount + 1) % 5 }
            });
            this.loadingDots();
        }, 250);
    }
    
    render() {
        let todoComponents = this.state.todoItems.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} handleChange={this.handleChange} />)
        return (
            <ul className="todo-list">
                {this.state.isLoading ? <p>{this.state.dynamicLoadingMessage}</p> : todoComponents}
            </ul>
        );
    }
}

export default TodoList;