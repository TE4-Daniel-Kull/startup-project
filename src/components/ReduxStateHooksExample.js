import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement} from '../redux/count';

function ReduxStateConnectExample(props) {
    const count = useSelector((globalState) => globalState.count);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>Counter(using hooks): {count}</h1>
            <button onClick={() => {dispatch(decrement())}}>-</button>
            <button onClick={() => {dispatch(increment())}}>+</button>
        </div>
    );
}

export default ReduxStateConnectExample;