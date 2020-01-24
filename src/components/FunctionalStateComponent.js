import React from'react';
import randomColor from 'randomcolor';

function FunctionalStateComponent() {
    const [value, setValue] = React.useState("I am a value");
    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState("black");

    function updateCount() {
        setCount(prevCount => prevCount + 1);
    }

    React.useEffect(() => { // Gets called everytime count changes value (see second argument).
        setColor(randomColor());
    }, [count]);

    return (
        <div>
            <h1>Here is your value: {value}</h1>
            <input 
                value={value} 
                onChange={(event) => {setValue(event.target.value)}}
            />
            <br />
            <h2 style={{color: color}}>{count}</h2>
            <button onClick={updateCount}>Increment</button>
        </div>
    );
}

export default FunctionalStateComponent;