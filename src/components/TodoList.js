import React from 'react';
import {connect} from 'react-redux';
import TodoItem from './TodoItem';

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
            isLoading: false,
            loadingMessage: "Loading all your shit",
            dynamicLoadingMessage: "",
            loadingCount: 0
        }
    }

    // componentDidMount() {
    //     this.loadingDots();
    // }

    // loadingDots() {
    //     if(!this.state.isLoading) return;

    //     setTimeout(() => {
    //         this.setState((prevState) => {
    //             let dots = ".".repeat(prevState.loadingCount);

    //             return {dynamicLoadingMessage: prevState.loadingMessage + dots, loadingCount: (prevState.loadingCount + 1) % 5 }
    //         });
    //         this.loadingDots();
    //     }, 250);
    // }
    
    render() {
        let todoComponents = this.props.todoList.map(todoItem => <TodoItem key={todoItem.id} todoItem={todoItem} />)
        return (
            <ul className="todo-list">
                {this.state.isLoading ? <p>{this.state.dynamicLoadingMessage}</p> : todoComponents}
            </ul>
        );
    }
}

function mapStateToProps(globalState) {
    return {
        todoList: globalState.todo
    };
}

export default connect(mapStateToProps, {})(TodoList);