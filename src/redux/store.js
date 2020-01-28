import favoriteThingsReducer from './favoriteThings';
import moodReducer from './mood';
import countReducer from './count';
import todoReducer from './todo';
const Redux = require('redux');

const rootReducer = Redux.combineReducers({
    favoriteThings: favoriteThingsReducer,
    mood: moodReducer,
    count: countReducer,
    todo: todoReducer
});

const store = Redux.createStore(rootReducer);
export default store;

/* 
 * 1 CREATE REDUCER FOR TODO
        * Create a file redux/todo.js
        * Write action for:
            * AddTodo
            * RemoveTodo
            * UpdateTodo
        * Write reducer with functionality for
            * ADD_TODO [...todos, action.payload]
            * REMOVE_TODO filter
            * UPDATE_TODO map
        * Export todoReducer
* 2 IMPLEMENT TODO STATE IN TodoList
    * import actions from redux/todo.
    * Remove local state for todoList.
    * Create function mapStateToProps(globalState).
    * Add const obj mapDispatchToProps.
    * Add connect to export.
    * Replace occurrences of this.state.todoList withthis.props.todoList.
    * (IF EXISTS) Modify OnChange function to use prop actions.
* 3 Implement TODO STATE IN TodoItem
    * import react-redux connect function.
    * move HandleChange function and action imports from TodoList into TodoItem.
        * move function
        * modify function to use toggle action.
            * Create function toggleTodoDone in redux/todo.js
            * Add "TOGGLE_TODO_DONE" in reducer to search for the todo by id and toggle it's done value.
    * Create const mapDispatchToProps function.
    * Add connect function to export.
    * Change onClick function call if needed. (props. => this.)
- 4 LOAD MOCKUP DATA INTO TodoList USING redux/todo.js
    - import thunk so we can do asyncronous tasks.
    - Create an asyncronous action to fetchTodos in redux/todo.
        - Make a mockup fetch request to a random api.
        - .Then(), pass mockupdata from MockupData.todoItems as payload.
    - Create reducer case for "OVERRITE_TODO_LIST".
        - Return the action.payload.
*/