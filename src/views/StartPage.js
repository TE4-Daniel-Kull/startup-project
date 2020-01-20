import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import MockupData from '../MockupData.js';

class StartPage extends React.Component {

    constructor () {
        super();

        this.state = {
            todoItems: MockupData.todoItems
        };
    }
    render() {
        return (
            <div>
                <TodoList todoItems={this.state.todoItems}/>
                <TodoForm todoItems={this.state.todoItems}/>
            </div>
        );
    }
}

export default StartPage;
