import React from 'react';

import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import FunctionalStateComponent from '../components/FunctionalStateComponent';
import MockupData from '../MockupData.js';
import ReduxStateConnectExample from '../components/ReduxStateConnectExample';
import ReduxStateHooksExample from '../components/ReduxStateHooksExample';
import BasicHeader from '../components/BasicHeader';
import BasicFooter from '../components/BasicFooter';

class DevPage extends React.Component {

    constructor () {
        super();

        this.state = {
            todoItems: MockupData.todoItems
        };
    }
    render() {
        return (
            <div>
                <BasicHeader />
                <TodoList todoItems={this.state.todoItems} />
                <TodoForm todoItems={this.state.todoItems} />
                <FunctionalStateComponent />
                <ReduxStateConnectExample />
                <ReduxStateHooksExample />
                <BasicFooter />
            </div>
        );
    }
}

export default DevPage;
