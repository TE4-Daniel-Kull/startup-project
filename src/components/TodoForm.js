import React from 'react'

class TodoForm extends React.Component {
    constructor() {
        super();

        this.state = {
            isChecked: false,
            todoText: "",
            todoItems: this.props.todoItems
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

        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h2>Create new todo:</h2>
                <form>
                    <input 
                        name="isChecked"
                        type="checkbox"  
                        onChange={this.handleChange}
                    />
                    <input 
                        name="todoText"
                        type="text"
                        onChange={this.handleChange}
                    >
                    </input>
                    <button 
                        onClick={this.submitForm}
                    >
                        Create todo
                    </button>
                </form>
                <p>checked: {this.state.isChecked.toString()}</p>
                <p>todoText: {this.state.todoText.toString()}</p>
            </div>
        );
    }
}

export default TodoForm;