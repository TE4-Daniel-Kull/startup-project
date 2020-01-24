import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../redux/count';

function ReduxStateConnectExample(props) {
    return (
        <div>
            <h1>Counter(using connect): {props.count}</h1>
            <button onClick={() => {props.decrement()}}>-</button>
            <button onClick={() => {props.increment()}}>+</button>
        </div>
    );
}

// For mapping the state values to the components props.
function mapStateToProps(globalState) {
    return {
        count: globalState.count
    };
}

// To map dispatch actions to props.
const mapDispatchToProps = {
    increment: increment,
    decrement: decrement
}

// connect: connects the global state variables to the properties of the given component.
export default connect(mapStateToProps, mapDispatchToProps)(ReduxStateConnectExample);