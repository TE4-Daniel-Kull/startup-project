import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import FunctionalStateComponent from '../components/FunctionalStateComponent';
import MockupData from '../MockupData.js';
import ReduxStateConnectExample from '../components/ReduxStateConnectExample';
import ReduxStateHooksExample from '../components/ReduxStateHooksExample';

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
                <FunctionalStateComponent />
                <ReduxStateConnectExample />
                <ReduxStateHooksExample />
            </div>
        );
    }
}

export default StartPage;
