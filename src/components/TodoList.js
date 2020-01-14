import React from 'react';

function TodoList() {
    return (
        <ul>
            <li>
                <input type="checkbox" name="done" value="false" />
                <span>Do your programming chores.</span>
            </li>
            <li>
                <input type="checkbox" name="done" value="false" />
                <span>Do it well.</span>
            </li>
            <li>
                <input type="checkbox" name="done" value="false" />
                <span>Don't use techniques we haven't learned.</span>
            </li>
        </ul>
    );
}

export default TodoList;