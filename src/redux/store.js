import favoriteThingsReducer from './favoriteThings';
import moodReducer from './mood';
import countReducer from './count';
import todoReducer from './todo';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    favoriteThings: favoriteThingsReducer,
    mood: moodReducer,
    count: countReducer,
    todo: todoReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));
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

* 4 SETUP REDUX-THUNK
    * import thunk from 'redux-thunk' in store.js.
    * import applyMiddleware from 
    * when creating store, pass in 'applyMiddleware(thunk)' as the second parameter.
* 5 LOAD MOCKUP DATA INTO TodoList USING redux/todo.js
    * complete #4.
    * Create an asyncronous action to fetchTodos in redux/todo.
        * return a function that takes the functions dispatch and getState as parameters.
            * Inside the funciton, make a mockup fetch request to a random api.
            * .Then(), pass mockupdata from MockupData.todoItems as payload.
            * Use the dispatch function with the normal action return syntax.
    * Create reducer case for "OVERRITE_TODO_LIST".
        * Return the action.payload.
* 6 MODIFY TodoList TO CALL ACTION fetchTodoList
    * import fetchTodoList from redux/todo.
    * pass it in using the mapDispatchToProps.
    * If the todoList is initially empty
        * call props.fetchTodoList.
    * Map over the todoList in our redux state and generate the TodoItem components.

- 7 CREATE C# BACKEND
*/