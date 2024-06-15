import React from 'react';
import './Style.scss';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <span>Count: {counter}</span>
            <button onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    );
};

export default Counter;