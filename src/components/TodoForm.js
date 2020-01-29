import React from 'react';
import {connect} from 'react-redux';
import {addTodo} from '../redux/todo';

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            isChecked: false,
            todoText: "",
            todoItems: []
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        let target = event.target;
        let name = target.name;
        let value = target.type === "checkbox" ? target.checked : target.value;

        this.setState({
            [name]: value
        });
    }

    submitForm(event) {
        event.preventDefault();

        let newTodo = {
            done: this.state.isChecked, 
            description: this.state.todoText
        }
        this.props.addTodo(newTodo);
    }

    render() {
        return (
            <div>
                <h2>Create new todo:</h2>
                <form onSubmit={this.submitForm}>
                    <input 
                        name="isChecked"
                        type="checkbox"  
                        value={this.state.isChecked}
                        onChange={this.handleChange}
                    />
                    <input 
                        name="todoText"
                        type="text"
                        value={this.state.todosText}
                        onChange={this.handleChange}
                    >
                    </input>
                    <button>Create todo</button>
                </form>
                <p>checked: {this.state.isChecked.toString()}</p>
                <p>todoText: {this.state.todoText.toString()}</p>
            </div>
        );
    }
}

const mapDispatchToProps = {
    addTodo: addTodo
}

export default connect(null, mapDispatchToProps)(TodoForm);


/*
* 1 RE-DESIGN TodoForm TO USE REDUX
    * import addTodo from redux/todo.
    * create const mapDispatchToProps containing the addTodo.
    * add connect(null, mapDispatchToProps) to export.
    * Change submitForm function to use addTodo instead of appending to local todoList.
    * import connect from react-redux.
*/