import React from 'react'

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

    componentDidMount() {
        this.setState({
            todoItems: this.props.todoItems
        });
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

        this.setState(prevState => {
            let updatedTodos = [...prevState.todoItems];
            console.log("updatedTodos", updatedTodos);
            updatedTodos.push({
                id: prevState.todoItems.length,
                done: prevState.isChecked, 
                description: prevState.todoText
            });

            return {todoItems: updatedTodos};
        });
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

export default TodoForm;