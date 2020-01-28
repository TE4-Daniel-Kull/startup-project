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
        case "ADD_TODO": {
            return [...todoList, action.payload];
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