import React from 'react';
import cl from './style.module.scss';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    return (
        <div>
            <span>Count: {counter}</span>
            <button className={cl.btn} onClick={() => setCounter(counter + 1)}>Click</button>
        </div>
    );
};

export default Counter;