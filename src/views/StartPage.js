import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

function StartPage() {
    return (
        <div>
            <TodoList />
            <TodoForm />
        </div>
    );
}

export default StartPage;
