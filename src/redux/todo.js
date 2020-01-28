import mockupData from '../MockupData'
import 'redux-thunk';

export function fetchTodoList() { // NODE: Using mockup data and mockup api!
    return (dispatch, getState) => {
        fetch("https://swapi.co/api/people/1")
            .then(response => {
                if(!response.ok) {
                    throw Error(response.statusText);
                }
                return response.json();
            })
            .then(responseAsJson => {
                console.log("Api response: ", responseAsJson);
                const newTodoList = mockupData.todoItems; // mockup

                dispatch({
                    type: "OVERRITE_TODO_LIST",
                    payload: newTodoList
                });
            }).catch(error => {
                console.log("error was called", error);
                dispatch({type: ""});
            });
    }
}

export function addTodo(newTodo) {
    return {
        type: "ADD_TODO",
        payload: newTodo
    };
}

export function removeTodo(todo) {
    return {
        type: "REMOVE_TODO",
        payload: todo
    };
}

export function updateTodo(updatedTodo) {
    return {
        type: "UPDATE_TODO",
        payload: updatedTodo
    };
}

export function toggleTodoDone(id) {
    return {
        type: "TOGGLE_TODO_DONE",
        payload: id
    };
}

export default function todoReducer(todoList = [], action) {
    switch(action.type) {
        case "OVERRITE_TODO_LIST": {
            return action.payload;
        }
        case "ADD_TODO": {
            return [...todoList, {
                id: todoList.length + 1000, // REPLACE THIS WITH A UNIQUE IDENTIFIER
                ...action.payload
            } ];
        }
        case "REMOVE_TODO": {
            return todoList.filter(todo => todo !== action.payload);
        }
        case "UPDATE_TODO": {
            return todoList.map(todo => {
                if(todo.id !== action.payload.id) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        ...action.payload
                    };
                }
            });
        }
        case "TOGGLE_TODO_DONE": {
            return todoList.map(todo => {
                if(todo.id !== action.payload) {
                    return todo;
                } else {
                    return {
                        ...todo,
                        done: !todo.done
                    };
                }
            });
        }
        default: {
            return todoList;
        }
    }
};